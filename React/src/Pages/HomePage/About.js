//about.js


import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10rem"
    >
      <Box maxW="50%">
        <Heading as="h2" size="2xl" color="#d53f8c" fontSize= '2.5rem' fontWeight= 'bold'>
          Mình là ai?
        </Heading>
        <Text color="#a0aec0" mt={4} >
          Mình đang là một{' '}
          <span style={{ color: '#4299e1' }}>Front End Developer</span>, blogger,
          và mentor dạy lập trình Front-End...
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
