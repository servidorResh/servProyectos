// IG-->resh96
import React from "react";
// componentes
import Navbar from "./components/Navbar";
import Pokemones from "./components/Pokemones"

function App() {
  

  return (
    <>
<Navbar brand="Listado de los Pokemones" />
      <div className="container mt-1">  
      <Pokemones/>  
      </div>    

    </>
  );
}

export default App;

