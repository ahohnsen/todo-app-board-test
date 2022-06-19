import styled from 'styled-components'

export default function TodoItem({ text, isDone, id, onToggle }) {
  return (
    <Item>
      <input
        onChange={() => onToggle()}
        checked={isDone}
        id={id}
        type="checkbox"
        name="checkbox"
      />
      <label htmlFor={id}>{text}</label>
    </Item>
  )
}

const Item = styled.li`
  input:checked + label {
    text-decoration: line-through;
    color: #555;
  }
`
