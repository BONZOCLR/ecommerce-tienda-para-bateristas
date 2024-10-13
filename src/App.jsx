import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/itemDetailContainer/itemDetailConteiner'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola! listo para tocar?"/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer greeting="Hola!"/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailConteiner/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
export default App

