import React from "react";

const People = ({ persons }) => {
  console.log(typeof persons)
  return (
    <div>
      <ul>
        {persons.map((person) => {
          return(
            <li>{person.name} {person.number}</li>
          )
        })}
      </ul>
    </div>
  );
};

export default People;
