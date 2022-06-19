import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from './TodoItem.js'

describe('TodoItem', () => {
  it('renders an item with a checkbox', () => {
    render(<TodoItem text="foo" id="1" isDone={false} />)
    expect(screen.getByLabelText('foo')).toBeInTheDocument()
  })

  it('can be checked and unchecked', () => {
    const { rerender } = render(<TodoItem text="foo" id="2" isDone={false} />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
    rerender(<TodoItem text="foo" isDone={true} id="2" />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('calls onToggle on click', async () => {
    const callback = jest.fn()
    render(<TodoItem onToggle={callback} text="foo" id="3" isDone={false} />)
    const user = userEvent.setup()
    await user.click(screen.getByText('foo'))
    expect(callback).toHaveBeenCalled()
  })
})
