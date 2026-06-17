import { useState } from 'react'

function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title.trim() === '') {
      setError('Task title cannot be empty')
      return
    }

    if (title.trim().length < 3) {
      setError('Task title must be at least 3 characters')
      return
    }

    setError('')
    onAdd(title.trim())
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          if (error) setError('')
        }}
        placeholder="Enter task title"
        style={{ marginRight: '0.5rem', padding: '0.4rem' }}
      />
      <button type="submit">Add Task</button>
      {error && <p style={{ color: 'red', margin: '0.25rem 0 0' }}>{error}</p>}
    </form>
  )
}

export default AddTaskForm