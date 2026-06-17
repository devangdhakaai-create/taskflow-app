// import Counter from './components/Counter'
// import Counter from './components/LightSwitch'
// import TaskList from './components/TaskList'
import { Routes, Route, Navigate} from "react-router-dom"
import TasksPage from './pages/TasksPage'
import TaskDetailPage from './pages/TaskDetailPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <navbar />
      <div style={{padding: '0 1rem'}}>
      <Routes>
        <Route path="/" element={<Navigate to="tasks"/>}/>
        <Route path="/tasks" element={<TasksPage/>} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
      </Routes>
    </div>
    </div>
  )
}

export default App