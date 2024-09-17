import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importa el archivo de estilos


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a nuestra tienda!" />
    </div>
  );
}


export default App;

