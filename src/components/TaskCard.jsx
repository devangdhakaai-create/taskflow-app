import { useState } from 'react'
import { useParams, Link } from 'react-router-dom';

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
          <Link to={`/tasks/${id}`}>View Detail</Link>
          <button onClick={() => {
            setEditTitle(title)
            setIsEditing(true)
          }}>Edit</button>
          <button onClick={() => onToggle(id, done)}>Toggle</button>
          <button onClick={() => onRemove(id)}>Delete</button>
        </div>
        
      )}
    </div>
  )
}

export default TaskCard