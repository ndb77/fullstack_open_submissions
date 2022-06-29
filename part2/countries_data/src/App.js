import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Result from "./components/Result";
import CountryView from "./components/CountryView";

const App = () => {
  const [countryList, setCountryList] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [filteredList, setFilteredList] = useState([])
  const [showCountry,setShowCountry] = useState([])
  const [weatherData,setWeatherData] = useState([])
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      setCountryList(response.data);
      console.log('Data',response.data)
    });
  }, []);

  useEffect(() => {
    if(showCountry.length!==0){
      axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${showCountry.capital}}&aqi=no`)
      .then((response) => {
        setWeatherData(response.data);
        console.log('Weather',response.data)
      });
    }
  }, [showCountry]);

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchBar(event.target.value);
    if (event.target.value===""){
      setFilteredList(countryList)
    }else{
      let countriesFiltered = countryList.filter(country=>{
        return country.name.common.toLowerCase().includes(event.target.value)
      })
      setFilteredList(countriesFiltered)
    }
  };

  const showButtonHandler = (event) =>{
    setShowCountry(filteredList[event.target.id])
  }
  return (
    <div>
      <h2>Find Countries</h2>
      <Search searchBar={searchBar} searchHandler={searchHandler} />
      <Result filteredList = {filteredList} showButtonHandler={showButtonHandler} showCountry={showCountry}></Result>
      <CountryView showCountry={showCountry} filteredList={filteredList} weatherData={weatherData}></CountryView>
    </div>
  );
};
export default App;
