import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Banner from './Banner';
import About from './About';
import Featured from './Featured';
import Courses from './Courses';
import {  Divider } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Divider color="#94a2b8" />
      <About />
      <Divider color="#94a2b8" />
      <Featured />
      <Divider color="#94a2b8" />
      <Courses />
      <Divider color="#94a2b8" />
      <Footer />
    </div>
  );
};

export default HomePage;
