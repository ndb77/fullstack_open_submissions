import React from "react";

const People = ({ persons,deleteHandler }) => {
  return (
    <div>
      <ul>
        {persons.map((person) => {
          return(
          <>
            <li key={person.id}>{person.name} {person.number}<button onClick={deleteHandler} id={person.id}>Delete</button></li>
          </>
          )
        })}
      </ul>
    </div>
  );
};

export default People;
