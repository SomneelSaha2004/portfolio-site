// src/components/Contact.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';

const Contact: React.FC = () => {
  return (
    <Box 
      id="contact"
      sx={{ 
        py: { xs: 12, md: 16 }, 
        position: 'relative',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, md: 4, lg: 5 },
      }}
    >
      <Box sx={{ maxWidth: '800px', textAlign: 'center' }}>
        {/* Section Heading */}
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontSize: { xs: '3rem', md: '4rem' },
            fontWeight: 900,
            color: '#333333',
            letterSpacing: '-0.02em',
          }}
        >
          Get in Touch!
        </Typography>

        {/* Resume Button */}
        <Button
          variant="contained"
          size="large"
          href="./resume.pdf"
          target="_blank"
          startIcon={<DownloadIcon sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' } }} />}
          sx={{
            mb: 6,
            py: { xs: 1.5, md: 2 },
            px: { xs: 4, md: 6 },
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            fontWeight: 700,
            borderRadius: '16px',
            color: '#ffffff',
            backgroundColor: '#007BFF',
            boxShadow: '0 4px 20px rgba(0, 123, 255, 0.3)',
            '&:hover': {
              backgroundColor: '#0056b3',
              transform: 'translateY(-4px)',
              boxShadow: '0 6px 25px rgba(0, 123, 255, 0.4)',
            },
            transition: 'all 0.3s ease'
          }}
        >
          Resume
        </Button>

        {/* Social Media Icons */}
        <Stack 
          direction="row" 
          spacing={{ xs: 4, md: 6 }} 
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          <IconButton 
            aria-label="Instagram"
            href="https://instagram.com"
            target="_blank"
            sx={{ 
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              color: '#333333',
              padding: { xs: '16px', md: '20px' },
              backgroundColor: '#ffffff',
              border: '1px solid #ddd',
              borderRadius: '50%',
              '&:hover': { 
                color: '#007BFF',
                transform: 'translateY(-5px)',
                backgroundColor: 'rgba(0, 123, 255, 0.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <InstagramIcon fontSize="inherit" />
          </IconButton>
          <IconButton 
            aria-label="GitHub"
            href="https://github.com/SomneelSaha2004"
            target="_blank"
            sx={{ 
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              color: '#333333',
              padding: { xs: '16px', md: '20px' },
              backgroundColor: '#ffffff',
              border: '1px solid #ddd',
              borderRadius: '50%',
              '&:hover': { 
                color: '#007BFF',
                transform: 'translateY(-5px)',
                backgroundColor: 'rgba(0, 123, 255, 0.1)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton 
            aria-label="LinkedIn"
            href="https://linkedin.com/in/SomneelSaha2004"
            target="_blank"
            sx={{ 
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              color: '#333333',
              padding: { xs: '16px', md: '20px' },
              backgroundColor: '#ffffff',
              border: '1px solid #ddd',
              borderRadius: '50%',
              '&:hover': { 
                color: '#007BFF',
                transform: 'translateY(-5px)',
                backgroundColor: 'rgba(0, 123, 255, 0.1)'
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
    </Box>
  );
};

export default Contact;