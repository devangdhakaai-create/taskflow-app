// import Counter from './components/Counter'
// import Counter from './components/LightSwitch'
// import TaskList from './components/TaskList'
import { Routes, Route, Navigate} from "react-router-dom"
import TasksPage from './pages/TasksPage'
import TaskDetailPage from './pages/TaskDetailPage'

function App() {
  return (
    <div>
      <h1>TaskFlow</h1>
      <Routes>
        <Route path="/" element={<Navigate to="tasks"/>}/>
        <Route path="/tasks" element={<TasksPage/>} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
      </Routes>
    </div>
  )
}

export default App