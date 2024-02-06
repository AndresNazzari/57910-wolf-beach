import { importProducts } from '../../firebase/importProducts'

const Home = () => {
  return (
    <>
      <button onClick={importProducts}>Import First Time</button>
      <div>Esto es Home</div>
    </>
  )
}

export default Home
