//Courses.js

import React from 'react';
import { Grid, Paper, Typography, Box, useTheme } from '@mui/material';

const Courses = () => {
  const theme = useTheme(); 
  const courses = [
    {
      title: "Quản lý quán ăn, gọi món bằng QR Code",
      image: "/path-to-image-1.png", 
      description: "Khóa học Next.js Super - Dr Thanh Dược"
    },
    {
      title: "Khóa học Node.js Super",
      image: "/path-to-image-2.png", 
      description: "Khóa học Node.js Super - Twitter API"
    },
    {
      title: "Khóa học ReactJs Super",
      image: "/path-to-image-3.png", 
      description: "Khóa học ReactJs Super - Shopee Clone Typescript"
    }
  ];
  return (
    <Box sx={{ p: '10rem'}} backgroundColor ="#1a2022">
      <Typography variant="h2" sx={{ color: "#d53f8c", mb: 4, fontSize: '2.5rem', fontWeight: 'bold' }}>
        Khóa học của mình
      </Typography>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: theme.palette.grey[800],
                borderRadius: 1,
                color: theme.palette.text.primary,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                src={course.image}
                sx={{
                  width: '100%',
                  height: 'auto',
                  mb: 2,
                }}
              />
              <Typography variant="h6" sx={{ mb: 1 }}>
                {course.title}
              </Typography>
              <Typography>
                {course.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
