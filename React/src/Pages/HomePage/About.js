//about.js


import React from 'react';
import { Box, Image, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const About = () => {
  const bg = useColorModeValue('#f0f0f0', '#1a2022'); 


  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10rem"
      //backgroundColor={bg}
    >
      <Box maxW="50%"  >
        <Heading as="h2" size="2xl" color="#d53f8c" fontSize= '2.5rem' fontWeight= 'bold'>
          Mình là ai?
        </Heading>
        <Text mt={4} >
          Mình đang là một{' '}
          <span style={{ color: '#4299e1' }}>Front End Developer</span>, blogger,
          và mentor dạy lập trình Front-End.Mình may mắn làm việc với những công ty tuyệt vời từ nhỏ cho đến lớn như RionLab, NeoLab, KMS.
        </Text>
        <Text mt={4} >
          Trong gần 5 năm làm việc, trải qua nhiều vấp ngã và bầm dập với nghề. Bây giờ, mình chia sẻ lại những kiến thức hay mà mình đúc kết lại trên blog này.
        </Text>
        <Text  mt={4} >
          Nội dung trên blog đa dạng chủ đề từ {' '}
          <span style={{ color: '#28a745' }}>Web Dev</span>, {' '}
          <span style={{ color: '#17a2b8' }}>Blockchain</span> , {' '}
          <span style={{ color: '#28a745' }}>Marketing</span> , 
          <span style={{ color: '#28a745' }}>cuộc sống</span>... 
          Tất cả đều dựa trên tiêu chí: thực dụng, chuyên sâu, dễ hiểu.  
        </Text>

      </Box>
      <Image
        src="path-to-your-about-image.jpg"
        alt="About Image"
        maxW="40%"
        height="auto"
        objectFit="cover"
      />
    </Box>
  );
};

export default About;
