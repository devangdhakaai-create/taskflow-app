import { useParams, Link } from 'react-router-dom';

function TaskDetailPage() {
  const { id } = useParams()

  const tasks = [
    { id: 1, title: "Buy groceries", done: false },
    { id: 2, title: "Walk the dog", done: true },
    { id: 3, title: "Finish TaskFlow", done: false }
  ]
  const task = tasks.find((t) => t.id === Number(id))
  if (!task) {
    return <p>Task not found</p>
  }
  return (
    <div>
        <h2>Task Detail</h2>
        <Link to="/tasks">← Back to Task</Link>
        <p>Title: {task.title}</p>
        <p>Status: {task.done ? 'Complete' : 'Pending'}</p>
    </div>
  )
}

export default TaskDetailPage