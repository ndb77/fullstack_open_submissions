import { useState } from "react";
import People from "./components/People";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilteredList, setNewFilterList] = useState("");
  const [newFilterInput, setNewFilterInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPersonObject = {
      name: newName,
      number: newNumber,
    };

    persons.some((person) => {
      if (person.name === newName || person.number === newNumber) {
        return alert(`${newName} is already in the list`);
      }
    });

    setPersons(persons.concat(newPersonObject));
    setNewName("");
    setNewNumber("");
  };

  const inputHandlerName = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const inputHandlerNumber = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const filterHandler = (event) => {
    event.preventDefault();
    let filteredPersons = persons.filter((person) => {
      return person.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setNewFilterList(filteredPersons)
    setNewFilterInput(event.target.value)
    // console.log(filteredPersons)
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
      <People persons={newFilterInput===""?persons:newFilteredList} />
    </div>
  );
};
export default App;
