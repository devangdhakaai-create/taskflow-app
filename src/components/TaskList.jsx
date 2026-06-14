import { useState } from "react"
import TaskCard from "./TaskCard"

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", done: false },
    { id: 2, title: "Walk the dog", done: true },
    { id: 3, title: "Finish TaskFlow", done: false }
  ])
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
            task.id === id? {...task, done: !task.done}:task)
        )
    }
  }
  return (
    <div>
        {tasks.map((task) => (
            <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                done={task.done}
                onRemove={removeTask}
                onToggle={toggleTask}
            />
        ))
        }
    </div>
  )
}
export default TaskList