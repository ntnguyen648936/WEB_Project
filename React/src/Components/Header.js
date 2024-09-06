// Header.js


import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Menu as MenuIcon, Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon, Facebook as FacebookIcon, Share as ShareIcon } from '@mui/icons-material';
import { useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerOpen(open);
  };

  const renderIcon = (text) => {
    switch (text) {
      case 'Switch theme':
        return colorMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />;
      case 'Facebook':
        return <FacebookIcon />;
      case 'Share':
        return <ShareIcon />;
      default:
        return null;
    }
  };

  const listItems = [
    { text: 'Khóa học' },
    { text: 'Blog' },
    { text: 'Resume' },
    { text: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100009199387358' },
    { text: 'Share' },
    { text: 'Switch theme', action: toggleColorMode },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listItems.map(({ text, href, action }) => (
          <ListItem
            button
            key={text}
            component={href ? 'a' : 'div'}
            href={href}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            onClick={action}
          >
            <IconButton color="inherit">
              {renderIcon(text)}
            </IconButton>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#0F172A', pl: '8rem', pr: '2rem' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button component={Link} to="/" sx={{ textTransform: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FF4F5A' }}>
              DTD
            </Typography>
          </Button>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, pr: '0.25rem' }}>
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Khóa học</Button>
            <Button component={Link} to="/blog" color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Blog</Button>
            <Button color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>Resume</Button>
             
            <IconButton color="inherit" onClick={toggleColorMode} sx={{ fontSize: '1rem', marginRight: '1rem' }}>
              {colorMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>

            <IconButton component="a" href="https://www.facebook.com/profile.php?id=100009199387358" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ fontSize: '1rem', marginRight: '1rem' }}>
              <FacebookIcon />
            </IconButton>

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
