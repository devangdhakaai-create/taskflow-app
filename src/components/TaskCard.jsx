function TaskCard({ id, title, done, onRemove }) {
  return (
    <div>
      <p>{title}</p>
      <p>{done ? "Completed" : "Pending"}</p>
      <button onClick={() => onToggle(id)}>Toggle</button>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  )
}

export default TaskCard