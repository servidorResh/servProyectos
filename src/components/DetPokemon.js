import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const DetPokemon = ({ detalle }) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [photo, setPhoto] = useState("");



  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.abilities);
        setInfo(data.forms);
        setPhoto(data.sprites.other.home.front_default);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCharacters(detalle);
  }, []);

  return (
    <div className="container bg-success p-2 text-dark bg-opacity-20 ">

      <div className="navbar bg-success bg-opacity-20 justify-content-center text-uppercase"><nav className="text-primary fs-1 text-uppercase">Detalle del Pokemon: {info.map((item, index) => (
        
          <span className="text-warning fs-1 text-uppercase">{item.name}</span>
        
      ))}</nav></div>
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col mb-3">

            <div className="card" style={{ minWidth: "500px", minHeight: "800px" }}>
              <img className="card-img-top rounded float-left" src={photo} alt="imagen" />
              <div className="card-body">

                <hr />
                <p className="card-text fw-bold">Habilidad: {item.ability.name}</p>
                <p className="card-text fw-bold">N° Ataque: {item.slot}</p>
                <p className="card-text fw-bold">Mas Habilidades: {item.ability.url}</p>

              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

DetPokemon.propTypes = {
  detail: PropTypes.string,
};


export default DetPokemon;