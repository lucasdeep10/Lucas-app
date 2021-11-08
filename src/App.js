import {useState, useEffect} from 'react';
import ItemCount from './components/NavBar/Button'
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
      <ItemListContainer saludo="Hola! Bienvenidos a ModApp"/>
      </>
    </div>
  );
}
//Funcion por defecto
export default App;

