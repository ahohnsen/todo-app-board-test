import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-size: 1.125rem;
  font-family: sans-serif;
  margin: 0;
}

#root {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

button, input, textarea {
  font: inherit;
}
`
