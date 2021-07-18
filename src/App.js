
import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './Components/Country/Country';


function App() {
  const [countries, setCountries] =  useState([]);
  const [addedCountries, setAddedCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])

  const handleAddedCountries = (e) => {
    setAddedCountries([...addedCountries, e]);
   
  }
  const totalPopulation = addedCountries.reduce((total,ct) => total + ct.population,0)
  console.log(totalPopulation);

  return (
    <div className="App">
        <h1>Total countries: {addedCountries.length}</h1> 
        <h4>{totalPopulation}</h4>
        {
          countries.map(ct => <Country country = {ct} added = {handleAddedCountries} ></Country> )
        }
        
    </div>
  );
}

export default App;
