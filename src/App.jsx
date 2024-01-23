import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Navbar from './components/Navbar/Navbar'
import PageNotFound from './components/PageNotFound/PageNotFound'
//nav-link from react-router-dom
//link from react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/products/:categoryId' element={<ItemListContainer />} />
        <Route path='/product/:productId' element={<ItemDetailContainer />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
