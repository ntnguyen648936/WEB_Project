//Homepage.js

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Banner from './Banner';
import About from './About';
import Featured from './Featured';
import Courses from './Courses';

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.text};
`;

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Banner />
        <About />
        <Featured />
        <Courses />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
