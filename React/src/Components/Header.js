//header

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Khóa học', 'Blog', 'Resume', 'Night Mode', 'Facebook', 'Share'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#0d1117', pl: '8rem', pr: '2rem' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, fontSize: '1.5rem', fontWeight: 'bold', color: '#FF4F5A' }}
              >
                DTD
              </Typography>
            </a>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' , pr: '0.25rem'} }}>
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Khóa học</Button>
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Blog</Button>
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Resume</Button>
            <Button onClick={toggleTheme} variant="contained" color="primary">
                {isDarkMode ? 'Light Mode' : 'Night Mode'}
            </Button>


            <a href="https://www.facebook.com/profile.php?id=100009199387358" target="_blank" rel="noopener noreferrer">
              <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>
                <i className="fab fa-facebook">Facebook</i>
              </Button>
            </a>  
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>
              <i className="fas fa-share-alt">Share</i>
            </Button>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default Header;
