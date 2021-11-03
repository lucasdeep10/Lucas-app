import {useState, useEffect} from 'react';
import Button from './components/NavBar/Button'
import './App.css';
import './Style.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListoConteiner/ItemListContainer';

function App() {
  const [estado, setEstado] = useState(true) //Estado
  const [count, setCount] = useState(0) //Contador
  
  //Funcion Estado
  const handleCambiarEstado = () => {
    setEstado(!estado)
  }
  useEffect(()=>{
    })
  return (
    <div className="App"><>
      <NavBar/>
      {count}
      <button onClick={()=>{setCount(count+1)}}>Sumar a Carrito</button> 
      <button onClick={()=>{setCount((count)-1)}}>Sacar de Carrito</button> 
      <button onClick={handleCambiarEstado}>Cambiar Estado</button>
      <ItemListContainer saludo="Hola! Bienvenidos a ModApp"/>
      </>
    </div>
  );
}
//Funcion por defecto
export default App;

