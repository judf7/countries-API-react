import React from 'react'

export default function NavBar({onChange,value,onRange,props,onClick}) {
  return (
    <div className="filter-container">
    <input
      type="text"
      id="inputSearch"
      placeholder="Rechercher"
      onChange={onChange}
    />
    <div className="range-container">
      <input
        type="range"
        value={value}
        max="250"
        id="inputRange"
        onChange={onRange}
      />
      <span id="rangeValue">{props}</span>
    </div>

    <button onClick={onClick} className="btnSort" id="minToMax">
      Tri croissant
    </button>
    <button onClick={onClick} className="btnSort" id="maxToMin">
      Tri décroissant
    </button>
    <button onClick={onClick} className="btnSort" id="alpha">
      Tri Alphabétique
    </button>
  </div>
  )
}
