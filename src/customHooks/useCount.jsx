import { useState } from 'react'

export const useCount = (initialValue = 0, min, max) => {
  if (initialValue < min || initialValue > max) initialValue = min

  const [count, setCount] = useState(initialValue)

  const incremet = () => {
    if (count < max) setCount(count + 1)
  }

  const decremet = () => {
    if (count > min) setCount(count - 1)
  }

  const reset = () => {
    setCount(initialValue)
  }

  return { count, incremet, decremet, reset }
}
