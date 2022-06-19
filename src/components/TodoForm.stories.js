import React from 'react'
import TodoForm from './TodoForm.js'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TodoForm',
  component: TodoForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onCreateTodo: { action: 'onCreateTodo' },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <TodoForm {...args} />
export const Default = Template.bind({})
