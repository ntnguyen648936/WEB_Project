// Featured.js


import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const FeaturedImage = styled.img`
  max-width: 40%;
  height: auto;
  object-fit: cover;
`;


/////////////////////////////////////////////////////Featured//////////////////////////////////////////////////////////////////////////////////////


const Featured = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10rem"
      sx={{ backgroundColor: '#0F172A', color: 'white' }} // Màu nền và màu chữ giống phần Banner và About
    >
      <Box maxWidth="50%">
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ed64a6' }}>
          Tìm mình trên CafeBiz
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Trở lại 2017, một năm hoàng kim của các đồng tiền kỹ thuật số như Bitcoin, Ethereum. 
          Lúc đó nhà nhà đầu tư bitcoin, người người bàn về bitcoin. 
          Và đó cũng là năm mình có những thu nhập đầu đời nhờ công việc lập trình này.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Mình đã dành ra khoảng 2 giờ để viết một tool hỗ trợ người dùng mua tiền điện tử, 
          và thế là nó giúp mình kiếm được 1000$ trong 3 ngày, một con số không tệ.
        </Typography>
      </Box>
      <FeaturedImage
        src="path-to-your-courses-image.jpg"
        alt="Featured Image"
      />
    </Box>
  );
};

export default Featured;
