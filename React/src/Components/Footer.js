//Footer.js


import React from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ pl: '10rem', pr: '10rem', pt: '3rem', pb: '5rem', backgroundColor: '#0F172A', color: 'white' }}>
    <Grid container spacing={5} justifyContent="space-between">
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.25rem' }}>
          Chính sách & Điều khoản
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '2rem' }}>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Chính sách bảo mật</Link></li>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Điều khoản</Link></li>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>RSS Feed</Link></li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.25rem' }}>
          Sản phẩm
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '2rem' }}>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Khóa học</Link></li>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Bài viết</Link></li>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Ebook thôi miên nhà tuyển dụng</Link></li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.25rem' }}>
          Hệ sinh thái
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, lineHeight: '2rem' }}>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Facebook của Du Thanh Dược</Link></li>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Youtube Dược Dev</Link></li>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Tiktok Dược Dev</Link></li>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Github</Link></li>
          <li><Link href="#" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#ed64a6' } }}>Dược Edu</Link></li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.25rem' }}>
          Giới thiệu
        </Typography>
        <Typography sx={{ lineHeight: '2rem' }}>
          Phát triển bởi Du Thanh Dược vào năm 2021, là blog cá nhân chia sẻ kiến thức IT, Marketing và cung cấp các khóa học chất lượng giúp mọi người level up kỹ năng của bản thân nhanh nhất.
        </Typography>
      </Grid>
    </Grid>
    <Box sx={{ textAlign: 'center', mt: 10 }}>
      <Typography>
        &copy; 2022 Du Thanh Dược. All rights reserved.
      </Typography>
    </Box>
  </Box>
);

export default Footer;
