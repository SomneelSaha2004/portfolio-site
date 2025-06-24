// src/components/NavBar.tsx
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavBar: React.FC = () => {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const sections = ['Timeline', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    const hero = document.getElementById('hero');
    const observer = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: '-80px 0px 0px 0px' }
    );
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 3 }}>
      <Typography variant="h6" sx={{ my: 3, fontWeight: 700, fontSize: '1.7rem' }}>
        Somneel Kumar Saha
      </Typography>
      <List>
        {sections.map((section) => (
          <ListItem key={section} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center',
                py: 2.5,
                fontSize: '1.3rem'
              }}
              href={`#${section.toLowerCase()}`}
            >
              <ListItemText 
                primary={section} 
                primaryTypographyProps={{ fontWeight: 600, fontSize: '1.3rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <Box sx={{ height: { xs: '70px', md: '90px' } }} />        <AppBar
        position="fixed"
        elevation={solid ? 6 : 2}
        color="transparent"
        sx={{
          backgroundColor: '#000000', // Pure black background
          borderBottom: `1px solid ${alpha('#ffffff', 0.1)}`,
          transition: 'all 0.3s ease',
          zIndex: theme.zIndex.drawer + 1,
          boxShadow: solid ? '0 4px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.2)'
        }}
      >
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between',
            maxWidth: '1900px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 6 },
            py: { xs: 1.5, md: 2.5 }
          }}
        >          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 800,
              letterSpacing: '-0.02em',
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              color: '#ffffff' // White text color
            }}
          >
            Somneel Kumar Saha
          </Typography>
          
          {/* Mobile menu button */}
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}              sx={{ 
                display: { md: 'none' },
                color: '#ffffff', // White icon
                fontSize: '2rem',
                padding: '12px'
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: { xs: 0, md: 2 } }}>
              {sections.map(section => (
                <Button 
                  key={section} 
                  color="inherit" 
                  href={`#${section.toLowerCase()}`}
                  sx={{ 
                    mx: { xs: 0.5, md: 1.5 },
                    px: { xs: 2, md: 3 },
                    py: { xs: 1, md: 1.5 },
                    fontSize: { xs: '1rem', md: '1.2rem' },                    fontWeight: 600,
                    color: '#ffffff', // White text
                    borderRadius: '10px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      backgroundColor: alpha('#6366f1', 0.2), // Purple hover effect
                      transform: 'translateY(-3px)',
                      transition: 'all 0.3s ease'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {section}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>

        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: 320 },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </>
  );
};

export default NavBar;
