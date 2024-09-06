// Course.js


import React from 'react';
import { Grid, Paper, Typography, Box, useTheme } from '@mui/material';




///////////////////////////////////////////Courses Section//////////////////////////////////////////////////////////////////////////////////////



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
    <Box sx={{ p: '10rem', backgroundColor: '#0F172A' }}>  
      <Typography variant="h2" sx={{ color: "#d53f8c", mb: 4, fontSize: '2.5rem', fontWeight: 'bold' }}>
        Khóa học của mình
      </Typography>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 2,
                backgroundColor:" #1e293b",  
                borderRadius: 1,
                color: '#fff', 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out',  
                '&:hover': {
                  transform: 'scale(1.05)', 
                }
              }}
            >
              <Box
                component="img"
                src={course.image}
                alt={course.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  mb: 2,
                  borderRadius: 1, 
                }}
              />
              <Typography variant="h6" sx={{ mb: 1, color: '#d53f8c' }}>
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
