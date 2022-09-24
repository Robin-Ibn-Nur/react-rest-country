import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, capital, area, flags } = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            <h1>country Name: {name.common}</h1>
            <img src={flags.svg} alt="" />
            <p>Population: {population}</p>
            <p>Aria: {area}</p>
            <span>Capital: {capital}</span>
        </div>
    );
};

export default Country;