import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap');
* {
  margin: 0;
  padding: 0;
  color: inherit;
  text-decoration: none;
  list-style: none;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
}

html, body {
  font-size: 10px;
}

body {
  height: 100vh;
  color: #121212;
  font-family: 'Noto Sans KR', sans-serif;
}

#__next {
  height: 100%;
}

button {
  cursor: pointer;
  background: none;
}
`;