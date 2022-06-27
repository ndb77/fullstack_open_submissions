import React from "react";

const Filter = ({ filterHandler,newFilterInput }) => {
  return (
    <div>
      Filter By Name: <input value = {newFilterInput} onChange={filterHandler}/>
    </div>
  );
};

export default Filter;