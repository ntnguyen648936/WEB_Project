//Header.js


import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#ffffff',
  text: '#000000',
  backgroundColor: '#f8f9fa',
  bannerBackground: '#e9ecef',
};

export const darkTheme = {
  body: '#1a202c',
  text: '#ffffff',
  backgroundColor: '#121212',
  bannerBackground: '#2c3e50',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.50s linear;
  }
`;
