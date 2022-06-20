import styled from 'styled-components'
import useSWR from 'swr'
import TodoForm from './components/TodoForm.js'
import TodoItem from './components/TodoItem.js'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  const {
    data: todos,
    error,
    isValidating: loading,
  } = useSWR('/api/todos', fetcher)

  function TodoState() {
    if (loading) return <div>... Loading ...</div>
    if (error) return <div>Error!</div>
    if (todos.length) {
      return (
        <TodoList>
          {JSON.stringify(todos)}
          {todos?.map((todo, index) => (
            <TodoItem
              key={todo._id}
              text={todo.description}
              id={todo._id}
              isDone={todo.done}
              onToggle={() => toggleTodo(index)}
            />
          ))}
        </TodoList>
      )
    }
    return <div>No todos</div>
  }

  return (
    <>
      <Grid>
        <TodoState />
        <TodoForm onCreateTodo={addTodo} />
      </Grid>
    </>
  )

  function addTodo(text) {
    // fetch('/api/todos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ description: text }),
    // })
    //   .then(response => {
    //     if (!response.ok) throw new Error('POST todo not ok')
    //     return response.json()
    //   })
    //   .then(todo => setTodos([...todos, todo]))
    //   .catch(error => console.log(error))
  }

  function toggleTodo(index) {
    const todo = todos[index]

    // fetch('/api/todos/' + todo._id, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ done: !todo.done }),
    // })
    //   .then(response => {
    //     if (!response.ok) throw new Error('PATCH todo not ok')
    //     return response.json()
    //   })
    //   .then(todo => {
    //     setTodos([
    //       ...todos.slice(0, index),
    //       { ...todo, done: todo.done },
    //       ...todos.slice(index + 1),
    //     ])
    //   })
    //   .catch(error => console.log(error))
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
