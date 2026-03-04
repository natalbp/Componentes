import React from 'react'
import Saludo from './componentes/Saludo'
import TarjetaUsuario from './TarjetaUsuario';

function App() {
return (
  <div>
    <h1>Lista de Jugadores</h1>
      <TarjetaUsuario nombre="Lucía" juegoFavorito="Valorant" />
      <TarjetaUsuario nombre="Marcos" juegoFavorito="Minecraft" />
      <TarjetaUsuario nombre="Sofía" juegoFavorito="Elden Ring" />
  </div>
  );
}

export default App
