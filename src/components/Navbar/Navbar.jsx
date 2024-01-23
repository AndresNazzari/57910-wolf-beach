import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo'
import { Link, NavLink } from 'react-router-dom'
// import { Link as LinkBoostrap } from 'bootstrap' ejemplo de alias
import { useEffect, useState } from 'react'
import { getCategoriesAsync } from '../../utils/MockData'

const Navbar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategoriesAsync().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <Logo />
      </Link>
      <div className={styles.links}>
        <Link to='/products'>All products</Link>
        {categories.map((category, index) => (
          <Link
            to={`/products/${category}`}
            key={index}
            className={styles.link}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
