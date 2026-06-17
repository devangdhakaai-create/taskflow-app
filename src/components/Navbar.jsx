import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
      <Link to="/tasks" style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
        TaskFlow
      </Link>
    </nav>
  )
}

export default Navbar