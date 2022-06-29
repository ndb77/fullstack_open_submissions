import React from "react";

const Result = ({ filteredList, showButtonHandler }) => {
  if (filteredList.length > 10) {
    return (
      <>
        <p>Too Many Countries</p>
      </>
    );
  } else if (filteredList.length < 1) {
    return <p>Please Enter Search Params</p>;
  } else {
    return (
      <div>
        <ul>
          {filteredList.map((country, i) => {
            return (
              <>
                <li key={i}>
                  {country.name.common}
                  <button id={i} onClick={showButtonHandler}>
                    Show
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
};
export default Result;
