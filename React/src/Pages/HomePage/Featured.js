//Feature

import React from 'react';
import { Box, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react';

const Featured = () => {
  
  const bg = useColorModeValue('#f0f0f0', '#1a2022'); 
  //const textColor = useColorModeValue('#000000', '#ffffff'); 
  const headingColor = useColorModeValue('#ed64a6', '#ed64a6'); 


  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10rem"
      backgroundColor={bg}    
    >
      <Box maxW="50%">
        <Heading as="h2" size="2xl" color={headingColor} fontSize='2.5rem' fontWeight='bold'>
          Tìm mình trên CafeBiz
        </Heading>
        <Text  mt={4}>
          Trở lại 2017, một năm hoàng kim của các đồng tiền kỹ thuật số số như Bitcoin, Ethereum. Lúc đó nhà nhà đầu tư bitcoin, người người bàn về bitcoin. Và đó cũng là năm mình có những thu nhập đầu đời nhờ công việc lập trình này.
        </Text>
        <Text  mt={4}>
          Mình đã dành ra khoảng 2 giờ để viết một tool hỗ trợ người dùng mua tiền điện tử, và thế là nó giúp mình kiếm được 1000$ trong 3 ngày, một con số không tệ.
        </Text>

      </Box>
      <Image
        src="path-to-your-courses-image.jpg"
        alt="Featured Image"
        maxW="40%"
        height="auto"
        objectFit="cover"
      />
    </Box>
  );
};

export default Featured;
