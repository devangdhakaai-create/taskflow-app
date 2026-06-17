import { useParams, Link, useNavigate } from 'react-router-dom';

function TaskDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const tasks = [
    { id: 1, title: "Buy groceries", done: false },
    { id: 2, title: "Walk the dog", done: true },
    { id: 3, title: "Finish TaskFlow", done: false }
  ]
  const task = tasks.find((t) => t.id === Number(id))
  if (!task) {
    return (
      <div>
        <p>Task not found</p>
        <button onClick={() => navigate('/tasks')}>Back to Tasks</button>
      </div>
    )
  }
  return (
    <div>
      <Link to="/tasks">← Back to Tasks</Link>
      <h2 style={{ margin: '1rem 0 0.5rem' }}>{task.title}</h2>
      <p>Status: {task.done ? '✅ Completed' : '⏳ Pending'}</p>
      <p>Task ID: {task.id}</p>
    </div>
  )
}

export default TaskDetailPage