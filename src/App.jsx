import './App.css'
import Users from './components/Users'

const fetchUsers = fetch('http://localhost:3000/users')
.then(res => res.json());

function App() {

  return (
    <>
      
      <h1>Simple Crud Operation</h1>
      <Users fetchUsers={fetchUsers}></Users>
    </>
  )
}

export default App
