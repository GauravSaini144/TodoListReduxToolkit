
import './App.css'
import CreateTodo from './component/CreateTodo.jsx'
import ShowTodo from './component/ShowTodo.jsx'
import { Toaster } from 'react-hot-toast'
function App() {
  

  return (
    <>
      <CreateTodo/> 
      <ShowTodo/>
      <Toaster/>
      
    </>
  )
}

export default App
