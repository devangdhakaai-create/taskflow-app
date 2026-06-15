import { useState } from "react"

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === '') return
    onAdd(title)
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default AddTaskForm