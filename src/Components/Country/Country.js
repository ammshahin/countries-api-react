import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, flag, region} = props.country;
    
    return (
        <div className="country-container">
             <div className="ct-flag">
              <img src={flag} alt="" />
             </div>
             <div className="ct-details">
                <h2>{name}</h2>
                <h5>Region:{region}</h5>
                <p>Total population: {population}</p>
                <button onClick={() => props.added(props.country)}>Add countries</button>
             </div>
            
        </div>
    );
};

export default Country;