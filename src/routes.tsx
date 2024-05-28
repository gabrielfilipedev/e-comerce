import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/categorias" element={<Categories></Categories>} />
    <Route path="/product/:id" element={<Product></Product>} />
    <Route path="/checkout" element={<Checkout></Checkout>} />
  </Routes>
)

export default Rotas
