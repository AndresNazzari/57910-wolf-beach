import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const navigate = useNavigate()
  const isAuth = false // TOMAR DEL CONTEXTO
  //const isAuthLocal = localStorage.getItem('isAuth')

  useEffect(() => {
    if (!isAuth) {
      console.log('No estoy Auth')
      navigate('/')
    }
  }, [isAuth])

  return <Outlet />
}

export default PrivateRoute
