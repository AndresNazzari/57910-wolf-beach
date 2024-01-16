import { useState, useEffect } from 'react'
import { getProductsAsync, getProductAsyncById } from '../../utils/MockData'
import ItemList from '../ItemList/ItemList'
import Spinner from '../Spinner/Spinner'
import { Counter } from '../Counter/Counter'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('antes de la promesa')
    getProductsAsync().then((products) => {
      setItems(products)
      setLoading(false)
      console.log(products)
    })

    getProductAsyncById(3).then((product) => {
      console.log(product)
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
