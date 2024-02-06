import { db } from './config'
import { collection, addDoc } from 'firebase/firestore'
// import { products } from '../utils/MockData.js'

export const importProducts = async () => {
  fetch(`https://fakestoreapi.com/products/`)
    .then((res) => res.json())
    .then((data) => {
      const productsCollection = collection(db, 'products')
      console.log(data)
      data.forEach((elem) => {
        addDoc(productsCollection, {
          name: elem.title,
          description: elem.description,
          price: elem.price,
          image: elem.image,
          category: elem.category,
        }).then((docRef) => {
          console.log(docRef)
          console.log(docRef.id)
        })
      })
    })

  // products.forEach(({ name, description, price, stock, image }) => {
  //   const category =
  //     name === 'Bulbasaur'
  //       ? 'Grass'
  //       : name === 'Charmander'
  //       ? 'Fire'
  //       : name === 'Squirtle'
  //       ? 'Water'
  //       : 'Electric'

  //   addDoc(productsCollection, {
  //     name,
  //     description,
  //     price,
  //     stock,
  //     image,
  //     category,
  //   }).then((docRef) => {
  //     console.log(docRef)
  //     console.log(docRef.id)
  //   })
  // })
}

// {
//   "id": 25,
//   "name": "Pikachu",
//   "description": "This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.",
//   "price": 2500,
//   "stock": 250,
//   "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
// }
