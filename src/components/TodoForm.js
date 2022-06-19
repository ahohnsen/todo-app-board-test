import styled from 'styled-components'
import ScreenReaderOnly from './ScreenReaderOnly.js'

export default function TodoForm({ onCreateTodo, color }) {
  return (
    <Form onSubmit={handleSubmit} aria-labelledby="form-button">
      <Label htmlFor="todo-input">Describe your todo</Label>
      <Input autoComplete="off" type="text" id="todo-input" name="todo" />
      <Button>
        <ScreenReaderOnly>Create a new todo</ScreenReaderOnly>
        <span aria-hidden>+</span>
      </Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const todoText = form.elements.todo.value.trim()
    if (todoText.length) {
      onCreateTodo(todoText)
    }
    form.reset()
  }
}

const Form = styled.form`
  display: grid;
  grid-template-columns: auto 48px;
  gap: 6px;
  background: white;
`

const Label = styled.label`
  grid-column: span 2;
`

const Input = styled.input`
  padding: 8px 4px;
  border: 1px solid #ddd;
  border-radius: 0;
`

const Button = styled.button`
  border: none;
  background: #333;
  color: white;
`
