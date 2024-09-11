import React from 'react'

export default function NavBar({ onChange,activeButton, value, onRange, props, onClickMin,onClickMax,onClickAlpha }) {
  
  return (
    <div className="filter-container">
      <input
        type="text"
        id="inputSearch"
        placeholder="Rechercher votre Pays"
        onChange={onChange}
      />
      <div className="range-container">
        <input
          type="range"
          className="form-range custom-range"
          id="disabledRange"
          value={value}
          max="250"
          onChange={onRange}
        />
        <span id="rangeValue">{props}</span>
      </div>

      <button
        type="button"
        className={`btn btn-light mx-1 ${activeButton === 'minToMax' ? 'activebutton' : ''}`}
        id="minToMax"
        onClick={onClickMin}
      >
        Tri croissant
      </button>
      <button
        type="button"
        className={`btn btn-light mx-1 ${activeButton === 'maxToMin' ? 'activebutton' : ''}`}
        id="maxToMin"
        onClick={onClickMax}
      >
        Tri décroissant
      </button>
      <button
        type="button"
        className={`btn btn-light mx-1 ${activeButton === 'alpha' ? 'activebutton' : ''}`}
        id="alpha"
        onClick={onClickAlpha}
      >
        Tri Alphabétique
      </button>
    </div>
  );
}