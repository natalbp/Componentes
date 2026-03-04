import React from 'react'
import Saludo from './componentes/Saludo'
import BotonLike from './componentes/BotonLike';
import TarjetaUsuario from './TarjetaUsuario';
import PostConEfecto from './componentes/PostConEfecto';
import MatematicasMagicas from './componentes/MatematicasMagicas';

function App() {
return (
  <div>
    <Saludo />
    <PostConEfecto />
    <MatematicasMagicas />
    <BotonLike />

    <h1>Lista de Jugadores</h1>
      <TarjetaUsuario nombre="Lucía" juegoFavorito="Valorant" />
      <TarjetaUsuario nombre="Marcos" juegoFavorito="Minecraft" />
      <TarjetaUsuario nombre="Sofía" juegoFavorito="Elden Ring" />
  </div>
  );
}

export default App
