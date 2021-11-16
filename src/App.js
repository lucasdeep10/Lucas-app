import {useState, useEffect} from 'react';
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
    },[count])
    console.log(App)
  return (
    <div className="App"><>
      <NavBar/>
      {count}
      <button onClick={()=>{setCount(count+1)}}> click</button>
      <button onClick={handleCambiarEstado}> Cambiar de estado</button>
      <ItemListContainer saludo="Hola! Bienvenidos a ModApp"/>
      </>
    </div>
  );
}
//Funcion por defecto
export default App;

