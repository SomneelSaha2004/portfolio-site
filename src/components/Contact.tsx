// src/components/Contact.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';

const Contact: React.FC = () => {
  const theme = useTheme();
  return (
    <Box 
      id="contact"
      sx={{ 
        py: { xs: 10, md: 14 }, 
        position: 'relative',
        maxWidth: '2000px',
        mx: 'auto',
        px: { xs: 2, md: 4, lg: 5 },
        textAlign: 'center'
      }}
    >      {/* Minimalist decorative pattern */}
      <Box 
        sx={{
          position: 'absolute',
          top: 80,
          right: -100,
          width: '400px',
          height: '400px',
          background: 'linear-gradient(45deg, #ffffff 25%, #f5f5f5 25%, #f5f5f5 50%, #ffffff 50%, #ffffff 75%, #f5f5f5 75%, #f5f5f5)',
          backgroundSize: '20px 20px',
          zIndex: -1,
          opacity: 0.5
        }}      />

      {/* Resume Button */}      <Button
        variant="outlined"
        size="medium"
        href="/resume.pdf"
        target="_blank"
        startIcon={<DownloadIcon sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' } }} />}
        sx={{
          mb: 8,
          py: { xs: 1.2, md: 1.5 },
          px: { xs: 3, md: 4 },
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          fontWeight: 600,
          borderRadius: '2px',
          color: '#000000',
          borderColor: '#000000',
          borderWidth: '1px',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',
            borderColor: '#000000',
            transform: 'translateY(-3px)',
          },
          transition: 'all 0.3s ease'
        }}
      >
        Resume
      </Button>{/* Socials Heading */}      <Typography
        variant="h2"
        sx={{
          mb: 6,
          mt: 4,
          fontSize: { xs: '2.8rem', md: '3.5rem' },
          fontWeight: 800,
          color: '#000000',
          letterSpacing: '-0.02em',
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '3px',
            bottom: '-8px',
            left: '0',
            backgroundColor: '#000000'
          }
        }}
      >
        Socials
      </Typography>{/* Social Media Icons */}      <Stack 
        direction="row" 
        spacing={{ xs: 3, md: 5 }} 
        justifyContent="center"
        sx={{ mb: 10 }}
      >        <IconButton 
          aria-label="Instagram"
          href="https://instagram.com"
          target="_blank"
          sx={{ 
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            color: '#000000',
            padding: { xs: '12px', md: '16px' },
            backgroundColor: '#ffffff',
            border: '1px solid #000000',
            borderRadius: '2px',
            '&:hover': { 
              color: '#000000',
              transform: 'translateY(-5px)',
              backgroundColor: 'rgba(0,0,0,0.03)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <InstagramIcon fontSize="inherit" />
        </IconButton>        <IconButton 
          aria-label="GitHub"
          href="https://github.com/SomneelSaha2004"
          target="_blank"
          sx={{ 
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            color: '#000000',
            padding: { xs: '12px', md: '16px' },
            backgroundColor: '#ffffff',
            border: '1px solid #000000',
            borderRadius: '2px',
            '&:hover': { 
              color: '#000000',
              transform: 'translateY(-5px)',
              backgroundColor: 'rgba(0,0,0,0.03)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <GitHubIcon fontSize="inherit" />
        </IconButton>        <IconButton 
          aria-label="LinkedIn"
          href="https://linkedin.com/in/SomneelSaha2004"
          target="_blank"
          sx={{ 
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            color: '#000000',
            padding: { xs: '12px', md: '16px' },
            backgroundColor: '#ffffff',
            border: '1px solid #000000',
            borderRadius: '2px',
            '&:hover': { 
              color: '#000000',
              transform: 'translateY(-5px)',
              backgroundColor: 'rgba(0,0,0,0.03)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
      </Stack>

      {/* Copyright Footer */}
      <Typography
        variant="body2"
        sx={{
          mt: 8,
          textAlign: 'center',
          opacity: 0.7
        }}
      >
        © {new Date().getFullYear()} Somneel Saha. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Contact;