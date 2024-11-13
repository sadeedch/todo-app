import { useState, useEffect} from 'react'
import './App.css'
import { TodoProvider } from './context';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo},...prev])
  }   // destructring the previous todos and add in the new one with a key. 

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map( (prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  } // if found id of current todo, update it otherwise let it be the previous one. 

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id) )
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map( (prevTodo) => (prevTodo.id === id ? 
      {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  } 

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length >0 ) {
      setTodos(todos)
    }
  }, [])
  


  return (
  <>
   <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos </h1>
                    <h3>Sadeed Ahmad</h3>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
  </TodoProvider>
  </>

  )
}

export default App
