import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import App from './App.js'

describe('App', () => {
  it('renders todos from form', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByLabelText(/describe/i)
    await user.type(input, 'test{enter}foo{enter}bar{enter}')
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('test')
  })
})
