import React from 'react'
import TodoItem from './TodoItem.js'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TodoItem',
  component: TodoItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onToggle: { action: 'onToggle' },
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <TodoItem {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'buy coffee',
  isDone: false,
  id: '1',
}

export const Checked = Template.bind({})
Checked.args = {
  text: 'buy coffee',
  isDone: true,
  id: '2',
}
