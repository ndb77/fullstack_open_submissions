import React from "react";

const Search = ({searchBar,searchHandler}) => {
  return (
    <div>
      <p>Search For Country:<input value={searchBar} onChange={searchHandler}/></p>
    </div>
  );
};
export default Search;