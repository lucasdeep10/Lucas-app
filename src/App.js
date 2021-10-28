import './App.css';
import './Style.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListoConteiner/ItemListContainer';

function App() {
  const sayHello = () => console.log();
  return (
    <div className="App"><>
      <NavBar/>
      <ItemListContainer saludo= {sayHello} />
      </>
    </div>
  );
}
//Funcion por defecto
export default App;

