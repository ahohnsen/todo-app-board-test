import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoForm from './TodoForm.js'

describe('TodoForm', () => {
  it('renders an accessible form', async () => {
    render(<TodoForm />)
    await screen.findByRole('form')
    await screen.findByLabelText(/describe/i)
    await screen.findByRole('button', { name: /create/i })
  })

  it('calls onCreateTodo with text', async () => {
    const user = userEvent.setup()
    const callback = jest.fn()
    render(<TodoForm onCreateTodo={callback} />)
    const input = await screen.findByLabelText('describe', { exact: false })
    await user.type(input, 'buy coffee {enter}')
    expect(callback).toHaveBeenCalledWith('buy coffee')
  })

  it('does not call onCreateTodo with whitespace only', async () => {
    const user = userEvent.setup()
    const callback = jest.fn()
    render(<TodoForm onCreateTodo={callback} />)
    const input = await screen.findByLabelText('describe', { exact: false })
    await user.type(input, '    {enter}')
    expect(callback).not.toHaveBeenCalled()
  })

  it('trims whitespace at onCreateTodo', async () => {
    const user = userEvent.setup()
    const callback = jest.fn()
    render(<TodoForm onCreateTodo={callback} />)
    const input = await screen.findByLabelText('describe', { exact: false })
    await user.type(input, '     trimmed    {enter}')
    expect(callback).toHaveBeenCalledWith('trimmed')
  })
})
