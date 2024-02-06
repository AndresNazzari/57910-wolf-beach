import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'
import PageNotFound from './components/PageNotFound/PageNotFound'
// import PrivateRoute from './routing/PrivateRoute'
//nav-link from react-router-dom
//link from react-router-dom
import CartProvider from './routing/context/cartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />

          {/* <Route path='/products' element={<PrivateRoute />}> */}
          <Route path='/products' element={<ItemListContainer />} />
          {/* </Route> */}

          <Route path='/products/:categoryId' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
