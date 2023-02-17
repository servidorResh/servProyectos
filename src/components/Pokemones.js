import React, { useState, useEffect } from 'react';
import Modals from '../modals/Modals';

const Pokemones = () => {
  const [pokemon, setPokemon] = useState([]);
  const [anterior, setAnterior] = useState(null);
  const [siguiente, setSiguiente] = useState(null);
  const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=42&offset=0');
    

  useEffect(() => {
    async function obtenerPokemones() {
      const response = await fetch(actual);
      const data = await response.json();
      console.log(data);
      setPokemon(data.results);
      setAnterior(data.previous);
      setSiguiente(data.next);
      //setNombre(data.results.name);

    }
    obtenerPokemones();
  }, [actual])


  return (
    <div className="container bg-success p-2 text-dark bg-opacity-20 ">
      <nav className="my-3">
        <ul className="pagination justify-content-center">
          <button class="page-link bg-success p-2 text-white fw-bold" onClick={() => anterior !== null && setActual(anterior)}>Anterior</button>
          <button class="page-link  bg-success p-2 text-white fw-bold" onClick={() => siguiente !== null && setActual(siguiente)}>Siguiente</button>
        </ul>
      </nav>
      <div className="row">
        {pokemon.map((pokemon, index) => (
          <div key={index} className="col mb-3">
            <div className="card" style={{ minWidth: "60px", minHeight: "60px" }}>

              <div className="card-body">
                <h5 className="card-title fw-bold">Pokemon:
                  <h4 className="text-warning " >{pokemon.name}</h4></h5>
                <hr />
                <Modals detail={pokemon.url} />
              </div>
            </div>
          </div>
        ))}

      </div>
      <nav className="my-3">
        <ul className="pagination justify-content-center">
          <button class="page-link bg-success p-2 text-white fw-bold" onClick={() => anterior !== null && setActual(anterior)}>Anterior</button>
          <button class="page-link  bg-success p-2 text-white fw-bold" onClick={() => siguiente !== null && setActual(siguiente)}>Siguiente</button>
        </ul>
      </nav>

    </div>
  )
}


export default Pokemones;