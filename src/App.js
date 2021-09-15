import React from 'react';
import { createGlobalStyle } from "styled-components";
import Bg from './Components/Bg';
import Btn from './Components/Btn';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #F9FAFB;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Bg />
      <Btn />
    </>
  );
}

export default App;
