// import { useState } from 'react'
// import TaskCard from './TaskCard'
// import AddTaskForm from './AddTaskForm'
// import { useEffect} from 'react'

// function TaskList() {
//   const [tasks, setTasks] = useState([])
// useEffect(() => {
//     // simulating an API call with setTimeout
//     setTimeout(() => {
//       try {
//         const fetchedTasks = [
//           { id: 1, title: "Buy groceries", done: false },
//           { id: 2, title: "Walk the dog", done: true },
//           { id: 3, title: "Finish TaskFlow", done: false }
//         ]
//         setTasks(fetchedTasks)
//         setIsLoading(false)
//       } catch (err) {
//         setError('Failed to load tasks')
//         setIsLoading(false)
//       }
//     }, 1500)
//   }, [])

//   const removeTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id))
//   }

//   const toggleTask = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, done: !task.done } : task
//       )
//     )
//   }

//   const addTask = (title) => {
//     const newTask = {
//       id: Date.now(),
//       title: title,
//       done: false
//     }
//     setTasks([...tasks, newTask])
//   }

//   const editTask = (id, newTitle) => {
//     setTasks(
//       tasks.map((task) =>
//       task.id === id ? {...task, title: newTitle} : task
//       )
//     )
//   } 
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState(null)
//   return (
//     <div>
//       {isLoading && <p>Loading tasks...</p>}
      
//       {error && <p>{error}</p>}
      
//       {!isLoading && !error && (
//         <div>
//           <p>
//             Total: {tasks.length} | 
//             Completed: {tasks.filter(task => task.done).length} | 
//             Pending: {tasks.filter(task => !task.done).length}
//           </p>
//           <AddTaskForm onAdd={addTask} />
//           {tasks.map((task) => (
//             <TaskCard
//               key={task.id}
//               id={task.id}
//               title={task.title}
//               done={task.done}
//               onRemove={removeTask}
//               onToggle={toggleTask}
//               onEdit={editTask}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default TaskList




import { useState, useEffect } from 'react'
import TaskCard from './TaskCard'
import AddTaskForm from './AddTaskForm'
import api from '../api/axios'

function TaskList() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch tasks from real API on mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks/')
        setTasks(response.data)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to load tasks')
        setIsLoading(false)
      }
    }
    fetchTasks()
  }, [])

  const addTask = async (title) => {
    try {
      const response = await api.post('/tasks/', { title, done: false })
      setTasks([...tasks, response.data])
    } catch (err) {
      alert('Failed to add task')
    }
  }

  const removeTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`)
      setTasks(tasks.filter((task) => task.id !== id))
    } catch (err) {
      alert('Failed to delete task')
    }
  }

  const toggleTask = async (id, currentDone) => {
    try {
      const response = await api.put(`/tasks/${id}`, { done: !currentDone })
      setTasks(tasks.map((task) =>
        task.id === id ? response.data : task
      ))
    } catch (err) {
      alert('Failed to update task')
    }
  }

  const editTask = async (id, newTitle) => {
    try {
      const response = await api.put(`/tasks/${id}`, { title: newTitle })
      setTasks(tasks.map((task) =>
        task.id === id ? response.data : task
      ))
    } catch (err) {
      alert('Failed to edit task')
    }
  }

  if (isLoading) return <p>Loading tasks...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <p>
        Total: {tasks.length} |
        Completed: {tasks.filter(task => task.done).length} |
        Pending: {tasks.filter(task => !task.done).length}
      </p>
      <AddTaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          done={task.done}
          onRemove={removeTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />
      ))}
    </div>
  )
}

export default TaskList