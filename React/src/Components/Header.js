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
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import FacebookIcon from '@mui/icons-material/Facebook';
import ShareIcon from '@mui/icons-material/Share';
import { useColorMode } from '@chakra-ui/react';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

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
        {['Khóa học', 'Blog', 'Resume','Facebook', 'Share', 'Switch theme' ].map((text, index) => (
          <ListItem button key={text}
          component={text === 'Facebook' ? 'a' : 'div'} 
          href={text === 'Facebook' ? 'https://www.facebook.com/profile.php?id=100009199387358' : undefined}
          target={text === 'Facebook' ? '_blank' : undefined} 
          rel={text === 'Facebook' ? 'noopener noreferrer' : undefined} 
          onClick={text === 'Switch theme' ? toggleColorMode : undefined}
       >
          <IconButton color="inherit">
              {text === 'Switch theme' ? (
                colorMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />
              ) : text === 'Facebook' ? (
                <FacebookIcon />
              ) : text === 'Share' ? (
                <ShareIcon />
              ) : null}
            </IconButton>
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
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, fontSize: '1.5rem', fontWeight: 'bold', color: '#FF4F5A' }}
            >
              DTD
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' , pr: '0.25rem'} }}>
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Khóa học</Button>
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Blog</Button>
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Resume</Button>

            <IconButton color="inherit" onClick={toggleColorMode} sx={{ fontSize: '1rem', marginRight: '1rem' }}>
              {colorMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>

            <a href="https://www.facebook.com/profile.php?id=100009199387358" target="_blank" rel="noopener noreferrer">
              <IconButton color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>
                <FacebookIcon />
              </IconButton>
            </a>

            <IconButton color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>
              <ShareIcon />
            </IconButton>
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
