import { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskForm from './AddTaskForm'

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", done: false },
    { id: 2, title: "Walk the dog", done: true },
    { id: 3, title: "Finish TaskFlow", done: false }
  ])

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
        />
      ))}
    </div>
  )
}

export default TaskList