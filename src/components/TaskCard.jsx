import { useState } from 'react'

function TaskCard({ id, title, done, onRemove, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(title)

  const handleSave = () => {
    if (editTitle.trim() === '') return
    onEdit(id, editTitle)
    setIsEditing(false)
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => {
            setEditTitle(title)
            setIsEditing(false)
          }}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{title}</p>
          <p>{done ? "Completed" : "Pending"}</p>
          <button onClick={() => {
            setEditTitle(title)
            setIsEditing(true)
          }}>Edit</button>
          <button onClick={() => onToggle(id)}>Toggle</button>
          <button onClick={() => onRemove(id)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default TaskCard