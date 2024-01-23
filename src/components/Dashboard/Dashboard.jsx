import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'

const Dashboard = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children} </div>
    </div>
  )
}

Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Dashboard
