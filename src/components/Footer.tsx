// src/components/Footer.tsx
import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => (  <Box
    component="footer"
    sx={{
      py: 4,
      textAlign: 'center',
      borderTop: '2px solid #000000'
    }}
  >    <Box sx={{ mb: 2 }}>
      <IconButton
        href="https://linkedin.com/in/SomneelSaha2004"
        target="_blank"
        aria-label="LinkedIn"
        sx={{ 
          color: '#000000',
          mx: 1,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)'
          }
        }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="https://github.com/SomneelSaha2004"
        target="_blank"
        aria-label="GitHub"
        sx={{ 
          color: '#000000',
          mx: 1,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)'
          }
        }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href="mailto:e1129797@u.nus.edu"
        aria-label="Email"
        sx={{ 
          color: '#000000',
          mx: 1,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)'
          }
        }}
      >
        <EmailIcon />
      </IconButton>
    </Box>    <Typography 
      variant="body2" 
      sx={{ 
        color: '#000000', 
        fontWeight: 500,
        letterSpacing: '0.5px'
      }}
    >
      © {new Date().getFullYear()} Somneel Kumar Saha. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
