import React from 'react'
import Todo from './components/Todo'
import TodoItems from './components/TodoItems'

function App () {
  return(
    <div className = 'bg-stone-900 grid py-4 min-h-screen'>
      <Todo/>
      <TodoItems/>
      
    </div>
  )
}
export default App