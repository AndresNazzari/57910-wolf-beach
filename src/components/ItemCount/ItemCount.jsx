/* eslint-disable react/prop-types */
import { useState } from 'react'

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1)

  const onChangeHandler = (event) => {
    setCount(Number(event.target.value))
  }

  return (
    <div>
      <div>
        <input
          type='button'
          value='-'
          onClick={() =>
            count > 1 ? setCount(count - 1) : alert('No se puede')
          }
        />
        <input type='number' value={count} onChange={onChangeHandler} />
        <input
          type='button'
          value='+'
          onClick={() => count < 99 && setCount(count + 1)}
        />
      </div>
      <input
        type='button'
        value='Agregar al carrito'
        onClick={() => onAdd(count)}
      />
    </div>
  )
}

export default ItemCount
