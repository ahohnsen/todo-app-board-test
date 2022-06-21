import styled from 'styled-components'
import useSWR from 'swr'
import TodoForm from './components/TodoForm.js'
import TodoItem from './components/TodoItem.js'

const fetcher = (...args) =>
  fetch(...args).then(response => {
    if (!response.ok) {
      throw new Error('An error occured while fetching the data.')
    }
    return response.json()
  })

function App() {
  const {
    data: todos,
    error,
    mutate,
  } = useSWR('/api/todos', fetcher, { refreshInterval: 1000 })

  // function TodoState() {
  //   if (!error && !todos) return <div>... Loading ...</div>
  //   if (error) return <div>Error!</div>
  //   return (
  //     <TodoList>
  //       {todos
  //         ? todos?.map((todo, index) => (
  //             <TodoItem
  //               key={todo._id || todo.tempId}
  //               text={todo.description}
  //               id={todo._id}
  //               isDone={todo.done}
  //               onToggle={() => toggleTodo(index)}
  //             />
  //           ))
  //         : '...loading...'}
  //     </TodoList>
  //   )
  // }

  if (error) return <p>Error</p>
  if (!todos && !error) return <p> ... loading ...</p>

  return (
    <>
      <Grid>
        {todos.length === 0 && <div>Please start adding todos</div>}
        <TodoList>
          {todos &&
            todos.map((todo, index) => (
              <TodoItem
                key={todo._id ?? todo.tempId}
                text={todo.description}
                id={todo._id}
                isDone={todo.done}
                onToggle={() => toggleTodo(index)}
              />
            ))}
        </TodoList>
        <TodoForm onCreateTodo={addTodo} />
      </Grid>
    </>
  )

  async function addTodo(text) {
    const todo = { tempId: Math.random(), description: text, done: false }

    mutate([...todos, todo], false)
    await fetcher('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: text }),
    })
    mutate()
  }

  async function toggleTodo(index) {
    const todo = todos[index]
    mutate(
      [
        ...todos.slice(0, index),
        { ...todo, done: !todo.done },
        ...todos.slice(index + 1),
      ],
      false
    )
    await fetcher('/api/todos/' + todo._id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: !todo.done }),
    })
    mutate()
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
