import React, {useEffect, useState} from 'react'

export default function Menu() {
  const url = "https://jsonplaceholder.typicode.com/todos"
  
  const [todos, setTodos] = useState() //hook
  
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }
  
  useEffect(() => {
    fetchApi()
  }, [])
  

  return (
    <div>
      <h1>Menu</h1>
      {/* Vamos a renderizar el TODO */}
      <ul>
        { !todos ? 'Cargando ...' : 
          todos.map((todo, index) => {
            return <li key={index}>{todo.title} {todo.completed ? '✅':'❌'}</li>
          })
        }
      </ul>
    </div>

  )
}
