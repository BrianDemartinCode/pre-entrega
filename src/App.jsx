import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import './App.css'
import './components/NavBar/NavBar.css'

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Bienvenido"/>
    </div>
  )
}

export default App
