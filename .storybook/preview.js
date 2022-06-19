import BaseStyles from '../src/BaseStyles.js'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    defaultViewport: 'mobile1',
  },
}

export const decorators = [
  Story => (
    <>
      <BaseStyles />
      <Story />
    </>
  ),
]
