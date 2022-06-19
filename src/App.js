import { nanoid } from 'nanoid'
import { useState } from 'react'
import styled from 'styled-components'
import TodoForm from './components/TodoForm.js'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <Grid>
      <TodoList>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </TodoList>
      <TodoForm onCreateTodo={handleNewTodo} />
    </Grid>
  )

  function handleNewTodo(text) {
    setTodos([...todos, { text, id: nanoid() }])
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
