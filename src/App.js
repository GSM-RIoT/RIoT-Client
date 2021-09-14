import React from 'react';
import { createGlobalStyle } from "styled-components";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Stock from './Components/Stock';

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
      <Header />
      <Stock />
      <Footer />
    </>
  );
}

export default App;
