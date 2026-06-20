// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
//       <Link to="/tasks" style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
//         TaskFlow
//       </Link>
//     </nav>
//   )
// }

// export default Navbar

import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/tasks" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        TaskFlow
      </Link>
      <div>
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar