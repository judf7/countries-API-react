import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function Card({ data, compare, inputSearch, inputRange }) {
  const [showModal,setShowModal]=useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null);
  const handleCardClick = (country) => {
    setSelectedCountry(country);
    setShowModal(true);
  };
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
              <div className="cards" key={index} onClick={()=> handleCardClick(country)}>
                <img className='my-4' src={country.flags.svg} alt={`Drapeau de ${country.translations.fra.common}`} />
                <h2>{country.translations.fra.common}</h2>
                <p>La population est de {country.population}</p>
              </div>
            ))}
        </div>
        {showModal && createPortal( <ModalContent data={selectedCountry} closeModal={() => setShowModal(false)}/>,
        document.body)}
      </>
    );
  }
 
  
