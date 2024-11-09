import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart' 
import Checkout from './components/Checkout/Checkout'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  
  return (
    <div className="container">
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola! listo para tocar?"/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer greeting="Hola!"/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>

  )
}
export default App

