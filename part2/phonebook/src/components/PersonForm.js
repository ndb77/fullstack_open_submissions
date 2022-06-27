import React from "react";

const PersonForm = ({ onSubmit, inputHandlerName, inputHandlerNumber,newName,newNumber }) => {

  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={inputHandlerName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={inputHandlerNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
