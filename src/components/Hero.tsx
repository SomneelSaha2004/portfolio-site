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
      right: { xs: '-30px', md: '5%' },
      top: { xs: '5%', md: '50%' },
      transform: { md: 'translateY(-50%)' },
      display: { xs: 'none', md: 'block' },
      zIndex: 0,
      width: { md: '400px', lg: '600px' },
    }}>
      <Box sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3
      }}>
        {[1, 2, 3, 4].map((index) => (
          <Box
            key={index}
            sx={{
              width: 'calc(50% - 12px)',
              height: index % 3 === 0 ? '250px' : '200px',
              borderRadius: index % 2 === 0 ? '8px' : '50%', // Mix of squares and circles
              background: '#f5f5f5',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              transform: index % 2 ? 'translateY(30px)' : 'none',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              opacity: 0.85,
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                opacity: 1,
                boxShadow: '0 10px 20px rgba(0,0,0,0.08)'
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
        background: '#ffffff', // Pure white background
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
            fontSize: { xs: '4.2rem', sm: '6rem', md: '8rem', lg: '9.5rem' },
            lineHeight: 0.95,
            letterSpacing: { xs: '-0.05em', md: '-0.07em' },
            position: 'relative',
            color: '#000000', // Pure black text
            display: 'inline-block',
          }}
        >
          Hi, I'm <Box 
            component="span" 
            className="highlight"
            sx={{
              position: 'relative',
              color: '#6366f1', // Purple accent color for emphasis
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '8px',
                left: 0,
                bottom: '8px',
                background: "rgba(99, 102, 241, 0.15)", // Very subtle purple underline
                borderRadius: '2px',
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
            color: '#000000', // Pure black text
            fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
            letterSpacing: '-0.02em',
            mb: { xs: 4, md: 6 } // Added margin at the bottom for better spacing
          }}
        >
          I am a <Box 
            component="span" 
            fontWeight={800} 
            sx={{ 
              color: '#000000', // Pure black text
              position: 'relative',
              display: 'inline-block',
              minWidth: { xs: '180px', sm: '230px', md: '280px' },
              borderBottom: '3px solid rgba(0, 0, 0, 0.2)' // Subtle underline
            }}
          >            {text}
            <Cursor cursorStyle="_" cursorColor="#000000" /> {/* Black cursor */}
          </Box>
        </Typography>
      </Box>

      {/* Decorative minimalist shapes */}
      <MinimalistDecoration />
    </Box>
  );
};

export default Hero;
