//Banner.js

import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';


const BannerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9rem;
  background-color: #1a2022;
  background-color: ${(props) => props.theme.bannerBackground};
  color: ${(props) => props.theme.text};
`;

const BannerTitle = styled.h1`
  font-size: 5rem;
  font-weight: bold;
`;

const BannerSubtitle = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const BannerTextContainer = styled.div`
  max-width: 50%;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#4299e1' : '#ed64a6'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin-right: ${props => props.primary ? '1rem' : '0'};
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;

// Styled component cho Logo Carousel
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
  opacity: ${props => (props.active ? 1 : 0)};
`;

// Mảng chứa các logo
const logos = [
  '../../../assets/img/html.png', 
  '../../../assets/img/html.png', 
  '../../../assets/img/html.png'    
];

// Component LogoCarousel
const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000); // Thay đổi logo mỗi 3 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <LogoContainer>
      {logos.map((logo, index) => (
        <LogoImage
          key={index}
          src={logo}
          alt={`Logo ${index}`}
          active={index === currentIndex}
        />
      ))}
    </LogoContainer>
  );
};

/////////////////////////////BannerSection////////////////////////////////

const Banner = () =>{
	return(
		<BannerSection>
       <BannerTextContainer>
          <BannerTitle>Hi, Mình là Được, web developer</BannerTitle>
          <BannerSubtitle>Senior Front End Developer | Blogger</BannerSubtitle>
          <div style={{ marginTop: '2rem' }}>
            <a href="https://www.facebook.com/profile.php?id=100009199387358" target="_blank" rel="noopener noreferrer">
              <Button primary>Liên hệ Facebook</Button>
            </a>
            <a href="https://www.facebook.com/messages/t/100006822168490/" target="_blank" rel="noopener noreferrer">
              <Button>Nhắn messenger cho mình</Button>
            </a>
          </div>
        </BannerTextContainer>
        <LogoCarousel />
      </BannerSection>
		);
};

export default Banner;