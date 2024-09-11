import React from 'react'


export default function ModalContent({ data, closeModal }) {
    
  return (<div className="modal-backdrop">
    <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" >
          <div className="modal-header">
            <h1 className="modal-title px-8 fs-5 " id="exampleModalLabel">{data.translations.fra.common}</h1>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Langue(s) : {Object.entries(data.languages).map((lang)=> lang[1]+ " ")}</p>
            <p>Continent : {data.continents[0]}</p>
            <p>Capitale : {data.capital[0]}</p>

            <a href={data.maps.googleMaps} target="_blank" rel="noopener noreferrer">Cliquez pour afficher sur la carte</a>
            
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
