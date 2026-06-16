import { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskForm from './AddTaskForm'
import { useEffect} from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([])
useEffect(() => {
    // simulating an API call with setTimeout
    setTimeout(() => {
      try {
        const fetchedTasks = [
          { id: 1, title: "Buy groceries", done: false },
          { id: 2, title: "Walk the dog", done: true },
          { id: 3, title: "Finish TaskFlow", done: false }
        ]
        setTasks(fetchedTasks)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to load tasks')
        setIsLoading(false)
      }
    }, 1500)
  }, [])

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      done: false
    }
    setTasks([...tasks, newTask])
  }

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, title: newTitle} : task
      )
    )
  } 
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      
      {error && <p>{error}</p>}
      
      {!isLoading && !error && (
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
      )}
    </div>
  )
}

export default TaskList