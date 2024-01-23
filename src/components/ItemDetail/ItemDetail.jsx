/* eslint-disable react/prop-types */
import styles from './ItemDetail.module.scss'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ item }) => {
  const { title, description, image, price } = item

  const onAdd = (count) => {
    console.log(`Agregaste ${count} ${title} al carrito`)
  }

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.item__info}>
        <h2 className={styles.item__info__title}>{title}</h2>
        <p className={styles.item__info__price}>${description}</p>
        <p className={styles.item__info__price}>${price}</p>
      </div>
      <ItemCount onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail
