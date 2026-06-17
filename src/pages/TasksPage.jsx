// import {Link} from 'react-router-dom'
// import TaskList from '../components/TaskList'

// function TasksPage() {
//     return (
//         <div>
//             <h2>My Tasks</h2>
//             <div>
//                 <Link to="/tasks/1">View Task 1</Link>
//                 <Link to="/tasks/2">View Task 2</Link>
//                 <Link to="/tasks/3">View Task 3</Link>
//             </div>
//             <div>
//                 <TaskList />
//             </div>
//         </div>
//     )
// }

// export default TasksPage


import TaskList from '../components/TaskList'

function TasksPage() {
  return (
    <div>
      <h2>My Tasks</h2>
      <TaskList />
    </div>
  )
}


export default TasksPage