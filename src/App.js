import { nanoid } from 'nanoid'
import { useState } from 'react'
import styled from 'styled-components'
import TodoForm from './components/TodoForm.js'
import TodoItem from './components/TodoItem.js'

function App() {
  const [todos, setTodos] = useState([])

  return (
    <Grid>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            id={todo.id}
            isDone={todo.isDone}
            onToggle={() => toggleTodo(index)}
          />
        ))}
      </TodoList>
      <TodoForm onCreateTodo={addTodo} />
    </Grid>
  )

  function addTodo(text) {
    setTodos([...todos, { text, id: nanoid(), isDone: false }])
  }

  function toggleTodo(index) {
    const todo = todos[index]
    setTodos([
      ...todos.slice(0, index),
      { ...todo, isDone: !todo.isDone },
      ...todos.slice(index + 1),
    ])
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
