import { useState, useEffect } from "react";
import People from "./components/People";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsService from "./services/personsService";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilteredList, setNewFilterList] = useState("");
  const [newFilterInput, setNewFilterInput] = useState("");

  const hook = () => {
    personsService.getAll().then((persons) => {
      setPersons(persons);
    });
  };
  useEffect(hook, [persons]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPersonObject = {
      name: newName,
      number: newNumber,
    };
    let duplicatePerson = null;
    let duplicateID = null;

    persons.some((person) => {
      if (person.name === newName || person.number===newNumber) {
        if(window.confirm(`${person.name} is already in the list. Replace?`)){
          duplicatePerson = person;
          duplicateID = person.id
          return (alert(`${person.name} was updated`));
        }
      } 
    });
    if(duplicatePerson===null){
      personsService.create(newPersonObject).then((person) => {
        console.log(person);
        setPersons(persons.concat(person));
      });
    }else{
      personsService.update(duplicateID,{...duplicatePerson,number:newNumber}).then((person) => {
        console.log(person);
        setPersons(persons.concat(person));
      });
    }
  };

  const inputHandlerName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const inputHandlerNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const filterHandler = (event) => {
    event.preventDefault();
    let filteredPersons = persons.filter((person) => {
      return person.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setNewFilterList(filteredPersons);
    setNewFilterInput(event.target.value);
  };

  const deleteHandler = (event) => {
    if(window.confirm('Are you sure?')){
      personsService
      .del(event.target.id)
      .then((response) => {
        setPersons(response)
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterHandler={filterHandler} newFilterInput={newFilterInput} />
      <h3>Add a new contact</h3>
      <PersonForm
        inputHandlerName={inputHandlerName}
        inputHandlerNumber={inputHandlerNumber}
        newName={newName}
        newNumber={newNumber}
        onSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <People
        persons={newFilterInput === "" ? persons : newFilteredList}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};
export default App;
