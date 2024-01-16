import styles from './Navbar.module.scss'
import Logo from '../Logo/Logo'
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
      <Logo />
      <div className={styles.links}>
        <div>All products</div>
        {categories.map((category, index) => (
          <div key={index} className={styles.link}>
            {category}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
