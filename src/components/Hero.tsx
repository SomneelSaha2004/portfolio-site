// src/components/Hero.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const roles = ['student', 'programmer', 'builder'];

// Minimalist geometric shapes for decoration
const MinimalistDecoration = () => {
  return (
    <Box sx={{
      position: 'absolute',
      right: { xs: '-50px', md: '10%' },
      top: { xs: '10%', md: '50%' },
      transform: { md: 'translateY(-50%)' },
      display: { xs: 'none', md: 'block' },
      zIndex: 0,
      width: { md: '350px', lg: '500px' },
    }}>
      <Box sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2
      }}>
        {[...Array(5)].map((_, index) => (
          <Box
            key={index}
            sx={{
              width: `calc(${Math.random() * 30 + 20}% - 8px)`,
              height: `${Math.random() * 100 + 100}px`,
              borderRadius: '12px',
              background: 'rgba(0, 123, 255, 0.05)',
              border: '1px solid rgba(0, 123, 255, 0.1)',
              transform: `translateY(${Math.random() * 40 - 20}px)`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.08) translateY(-10px)',
                background: 'rgba(0, 123, 255, 0.1)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: roles,
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 60,
    delaySpeed: 2000,
  });
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
      }}
    >
      {/* Central content area */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: '100%',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '1600px',
        px: { xs: 2, md: 6 }
      }}>
        <Typography 
          variant="h1" 
          sx={{
            mb: { xs: 3, md: 4 },
            fontWeight: 900,
            fontSize: { xs: '3.8rem', sm: '5.5rem', md: '7.5rem', lg: '9rem' },
            lineHeight: 1,
            letterSpacing: { xs: '-0.04em', md: '-0.06em' },
            position: 'relative',
            color: '#333333',
            display: 'inline-block',
          }}
        >
          Hi, I'm <Box 
            component="span" 
            className="highlight"
            sx={{
              position: 'relative',
              color: '#007BFF', 
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '10px',
                left: 0,
                bottom: '5px',
                background: "rgba(0, 123, 255, 0.1)",
                borderRadius: '3px',
                zIndex: -1,
              }
            }}
          >
            Somneel
          </Box>
        </Typography>
        <Typography 
          variant="h2" 
          sx={{ 
            fontWeight: 600, 
            color: '#333333',
            fontSize: { xs: '2rem', sm: '2.8rem', md: '3.8rem' },
            letterSpacing: '-0.02em',
            mb: { xs: 4, md: 6 }
          }}
        >
          I am a <Box 
            component="span" 
            fontWeight={800} 
            sx={{ 
              color: '#007BFF',
              position: 'relative',
              display: 'inline-block',
              minWidth: { xs: '170px', sm: '220px', md: '270px' },
              borderBottom: '4px solid rgba(0, 123, 255, 0.2)'
            }}
          >
            {text}
            <Cursor cursorStyle="_" cursorColor="#007BFF" />
          </Box>
        </Typography>
      </Box>

      {/* Decorative minimalist shapes */}
      <MinimalistDecoration />
    </Box>
  );
};

export default Hero;
