import React from 'react'

export default function Card({ data, compare, inputSearch, inputRange }) {
    return (
      <>
        <div className="countries-container">
          {data
            .filter((nom) =>
              nom.translations.fra.common
                .toLowerCase()
                .includes(inputSearch.toLowerCase())
            )
            .slice(0, inputRange)
            .sort((a, b) => {
              if (compare === "maxToMin") {
                return b.population - a.population;
              } else if (compare === "minToMax") {
                return a.population - b.population;
              } else if (compare === "alpha") {
                return a.translations.fra.common.localeCompare(
                  b.translations.fra.common
                ); 
              }
            })
            .map((country, index) => (
              <div className="cards" key={index}>
                <img src={country.flags.svg} alt={`Drapeau de ${country.name.common}`} />
                <h2>{country.name.common}</h2>
                <p>La population est de {country.population}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
 
  
