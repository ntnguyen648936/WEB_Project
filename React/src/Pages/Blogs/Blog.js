//Blog.js


import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Sidebar from './Sidebar';
import Content from './content';
import {  Divider } from '@mui/material';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

const EmptySpace = styled.div`
  width: 1000px; 
  background-color: #0F172A;
`;


const Blog = () => {
  const [activeSection, setActiveSection] = useState('Giới thiệu');

  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Sidebar activeSection={activeSection} setSelectedSection={setActiveSection} />
        <Content setActiveSection={setActiveSection} />
        <EmptySpace/>
      </MainContainer>
      <Divider color="#94a2b8" />
      <Footer />
    </AppContainer>
  );
};

export default Blog;
