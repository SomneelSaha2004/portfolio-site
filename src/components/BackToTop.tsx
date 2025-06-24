// src/components/BackToTop.tsx
import React, { useState, useEffect } from 'react';
import { Box, IconButton, Fade } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme, alpha } from '@mui/material/styles';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    // Show button when page is scrolled down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Fade in={isVisible}>
      <Box
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        aria-label="back to top"
        sx={{
          position: 'fixed',
          bottom: { xs: 25, md: 40 },
          right: { xs: 25, md: 40 },
          zIndex: 10,
          cursor: 'pointer',
        }}
      >
        <IconButton
          aria-label="scroll to top"
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: 'white',
            boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.5)}`,
            width: { xs: 50, md: 65 },
            height: { xs: 50, md: 65 },
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              transform: 'translateY(-8px)',
              boxShadow: `0 12px 25px ${alpha(theme.palette.primary.main, 0.7)}`,
              transition: 'all 0.3s ease'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' } }} />
        </IconButton>
      </Box>
    </Fade>
  );
};

export default BackToTop;
