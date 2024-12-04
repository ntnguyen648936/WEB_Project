// Banner.js


import React, { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import styled from 'styled-components';


const BannerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9rem;
  background-color: #0F172A;
  color: white;
`;

const BannerTextContainer = styled.div`
  max-width: 50%;
`;

const LogoContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

const logos = [
  '../../../assets/img/html.png',
  '../../../assets/img/html.png',
  '../../../assets/img/html.png',
];

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LogoContainer>
      {logos.map((logo, index) => (
        <LogoImage key={index} src={logo} alt={`Logo ${index}`} active={index === currentIndex} />
      ))}
    </LogoContainer>
  );
};


///////////////////////////////////Banner Section//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const Banner = () => {
  return (
    <BannerSection>
      <BannerTextContainer>
        <Typography variant="h1" component="h1" fontWeight="bold">
          Hi, Mình là Được, web developer
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ marginTop: '1rem' } }>
          Senior Front End Developer | Blogger
        </Typography>
        <Box sx={{ marginTop: '2rem' }}>
          <Button
            href="https://www.facebook.com/profile.php?id=100009199387358"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            sx={{ marginRight: '1rem' }}
          >
            Liên hệ Facebook
          </Button>
          <Button
            href="https://www.facebook.com/messages/t/100006822168490/"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="secondary"
          >
            Nhắn messenger cho mình
          </Button>
        </Box>
      </BannerTextContainer>
      <LogoCarousel />
    </BannerSection>
  );
};

export default Banner;
