import { useState, useEffect } from 'react'
import { getProductsAsync } from '../../utils/MockData'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  // const category = "men's clothing"

  useEffect(() => {
    console.log('antes de la promesa')
    getProductsAsync().then((products) => {
      // const filteredProducts = products.filter(
      //   (product) => product.category === category
      // )
      // setItems(filteredProducts)
      setItems(products)
      setLoading(false)
      console.log(products)
    })

    // async function fetchData() {
    //   try {
    //     const response = await getProductsAsync()
    //     setItems(response)
    //     setLoading(false)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // fetchData()
  }, [])

  return loading ? (
    <Spinner />
  ) : (
    <>
      <ItemList itemList={items} />
    </>
  )
}

ItemListContainer.propTypes = {}

export default ItemListContainer
