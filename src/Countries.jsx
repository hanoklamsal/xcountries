import React, { useState, useEffect } from 'react';
import Country from './Country';

const Countries = () => {
const [countries, setCountries] = useState([]);

useEffect(()=>{
    const url="https://xcountries-backend.azurewebsites.net/all";
    fetch(url).then((res) => res.json())
    .then((data) => setCountries(data))
    .catch((err) => console.error("Error fetching data: ", err));},[]
);

return (
    <div  style={{
        margin:"20px",
        display:"flex",
        flexWrap:"wrap",
        gap:"10px",
        }} >
      {countries.map((country) => (
        <div key={country.abbr}>
          <Country name={country.name} flag={country.flag} abbr={country.abbr} />
        </div>
      ))}
    </div>
  );
}

export default Countries