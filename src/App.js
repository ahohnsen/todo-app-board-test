import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import TodoForm from './components/TodoForm.js'
import TodoItem from './components/TodoItem.js'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('/api/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Not okay on GET todos')
        }
        return response.json()
      })
      .then(todos => setTodos(todos))
      .catch(error => console.log(error))
  }, [])

  return (
    <Grid>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo._id}
            text={todo.description}
            id={todo._id}
            isDone={todo.done}
            onToggle={() => toggleTodo(index)}
          />
        ))}
      </TodoList>
      <TodoForm onCreateTodo={addTodo} />
    </Grid>
  )

  function addTodo(text) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: text }),
    })
      .then(response => {
        if (!response.ok) throw new Error('POST todo not ok')
        return response.json()
      })
      .then(todo => setTodos([...todos, todo]))
      .catch(error => console.log(error))
  }

  function toggleTodo(index) {
    const todo = todos[index]

    fetch('/api/todos/' + todo._id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: !todo.done }),
    })
      .then(response => {
        if (!response.ok) throw new Error('PATCH todo not ok')
        return response.json()
      })
      .then(todo => {
        setTodos([
          ...todos.slice(0, index),
          { ...todo, done: todo.done },
          ...todos.slice(index + 1),
        ])
      })
      .catch(error => console.log(error))
  }
}

const Grid = styled.main`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100%;
  padding: 8px;
`

const TodoList = styled.ul.attrs(() => ({ role: 'list' }))`
  overflow-y: auto;
  height: 100%;
  display: grid;
  align-content: start;
  gap: 4px;
`

export default App
