// About.js


import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const AboutImage = styled.img`
  max-width: 40%;
  height: auto;
  object-fit: cover;
`;


/////////////////////////////////////////About Section//////////////////////////////////////////////////

const About = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10rem"
      sx={{ backgroundColor: '#0F172A', color: 'white' }} 
    >
      <Box maxWidth="50%">
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#d53f8c' }}>
          Mình là ai?
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Mình đang là một{' '}
          <span style={{ color: '#4299e1' }}>Front End Developer</span>, blogger,
          và mentor dạy lập trình Front-End. 
          Mình may mắn làm việc với những công ty tuyệt vời từ nhỏ cho đến lớn như RionLab, NeoLab, KMS.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Trong gần 5 năm làm việc, trải qua nhiều vấp ngã và bầm dập với nghề. 
          Bây giờ, mình chia sẻ lại những kiến thức hay mà mình đúc kết lại trên blog này.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Nội dung trên blog đa dạng chủ đề từ{' '}
          <span style={{ color: '#28a745' }}>Web Dev</span>,{' '}
          <span style={{ color: '#17a2b8' }}>Blockchain</span>,{' '}
          <span style={{ color: '#28a745' }}>Marketing</span>,{' '}
          <span style={{ color: '#28a745' }}>cuộc sống</span>... 
          Tất cả đều dựa trên tiêu chí: thực dụng, chuyên sâu, dễ hiểu.
        </Typography>
      </Box>
      <AboutImage
        src="path-to-your-about-image.jpg"
        alt="About Image"
      />
    </Box>
  );
};

export default About;
