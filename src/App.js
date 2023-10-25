import React, { useState } from 'react'
import Input from './components/Input.jsx'
import TodosBox from './components/TodosBox.jsx'

const App = () => {
  const [todos, setTodo] = useState([]);

  const removeTodo = (id) => {
    console.log(id)
    const newTodos = todos.filter(
      (d, index) => {
        if (index !== id) {
          return true
        } else {
          return false
        }
      }
    )
    setTodo(newTodos);
  }
  const addTodoHandler = (item) => {
    // console.log(item)
    setTodo([...todos, {
      item,
      time: new Date().toLocaleTimeString(),
    }])
    console.log(todos)
  }
  return (
    <div className='bg-slate-500 h-screen p-3' >
      <div className='rounded-[10px] mx-auto max-w-[700px] min-w-[600px] shadow-1xl p-5'>
        <Input handler={addTodoHandler} />
        <TodosBox data={todos} removeHandler={removeTodo} />
      </div>
    </div>
  )
}

export default App