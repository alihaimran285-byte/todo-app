import {  useState } from 'react'
import Home from './Component/Home/home'
import Add from './Component/Add/add'
import Edit from './Component/Edit/edit'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Completed from './Component/Completed/complete'

function App() {
  const [todo, setTodo] = useState([])
  localStorage.setItem('todo', JSON.stringify(todo))
  return (

    <>
      <Routes>
        <Route path="/" element={<Home todo={todo}
           setTodo={setTodo} />} />
        <Route path="/add" element={<Add todo={todo}
          setTodo={setTodo} />} />
        <Route path="/edit" element={<Edit todo={todo}
          setTodo={setTodo} />} />
          <Route path="/complete" element={<Completed todo={todo}
          setTodo={setTodo} />} />
      </Routes>
    </>
  )
}

export default App
