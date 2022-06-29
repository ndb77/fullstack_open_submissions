import React from "react";

const CountryView = ({ showCountry, filteredList, weatherData}) => {
  let displayCountry = (country) =>{
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map((language) => {
            return <li>{language}</li>;
          })}
        </ul>
        <img
          src={Object.values(country.flags)[0]}
          alt={country.name.common}
        ></img>
        <h3>Weather in {country.capital}</h3>
        <p>Temperature: {weatherData.current.temp_f}</p>
        <p>Wind: {weatherData.current.wind_mph} mph</p>
      </div>
    )
  }

  if(filteredList.length>1 && filteredList.length<10){
    if(showCountry.length===0){
      console.log('country not selected')
    }else{
      // console.log('not_empty',showCountry)
      return(displayCountry(showCountry))
    }
  }
};
export default CountryView;
