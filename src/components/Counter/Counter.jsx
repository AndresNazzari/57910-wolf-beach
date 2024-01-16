import { useCount } from '../../customHooks/useCount'

export const Counter = () => {
  const { count, decremet, incremet, reset } = useCount(0, -10, 10)

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={decremet}>Decrement</button>
        <button onClick={incremet}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
