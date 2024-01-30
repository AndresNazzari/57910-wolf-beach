/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const cartContext = createContext()

// createContext nos devuelve 2 componentes, Provider y Consumer
// Provider es un componente que debe envolver a toda la aplicación para que todos los componentes puedan acceder a
//los datos que se encuentran en el contexto
// Consumer es un componente que debe envolver a los componentes que necesiten acceder a los datos del contexto

const { Provider } = cartContext

// Custom hook para acceder al contexto desde cualquier componente
// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(cartContext)

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemsTotal, setItemsTotal] = useState(0) //cantidad de items en el carrito
  const [total, setTotal] = useState(0) //precio total de los items en el carrito

  const addItem = (item, quantity) => {
    setItemsTotal(itemsTotal + quantity)
    setTotal(total + item.price * quantity)

    if (isInCart(item.id)) {
      console.log('entro')
      const newCart = cart.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity }
        } else {
          return cartItem
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, { item, quantity }])
    }
  }

  const removeItem = (id) => {}

  const clear = () => {
    setCart([])
    setItemsTotal(0)
    setTotal(0)
  }

  const isInCart = (id) => cart.find((item) => item.item.id === id)

  const valorDelContexto = { cart, itemsTotal, addItem, removeItem, clear }

  return <Provider value={valorDelContexto}>{children}</Provider>
}

export default CartProvider
