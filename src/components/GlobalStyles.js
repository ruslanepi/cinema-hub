import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}

p {
  margin: 0;
}

.App {
 background-color: #e1e1e1;
}

.header {
 padding: 15px 0px;
 background: #fff;
 width: 100%;
}

.sidebar {
 background: #e3e3e3;
}

footer {
 
}

`
export default GlobalStyles
