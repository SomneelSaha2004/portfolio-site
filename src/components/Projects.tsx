// src/components/Projects.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import LinkIcon from '@mui/icons-material/Link';
import CodeIcon from '@mui/icons-material/Code';

interface ProjectData {
  name: string;
  period: string;
  description: string;
  link: string;
  gitLink: string;
  image: string;
  tags: string[];
}

const projectsData: ProjectData[] = [
  {
    name: 'MedGen',
    period: 'Jan 2025 – Apr 2025',
    description: 'LLM-guided synthetic diabetes dataset generation; ensured privacy & feature-dependency preservation.',
    link: '#',
    gitLink: 'https://github.com/SomneelSaha2004/MedGen',
    image: '/medgen-project.jpg',
    tags: ['Python', 'LLM', 'Healthcare', 'Data Generation']
  },
  {
    name: 'FitFriends',
    period: 'Jan 2025 – Apr 2025',
    description: 'Cross-platform fitness-management desktop app to organize group sports activities.',
    link: '#',
    gitLink: 'https://github.com/SomneelSaha2004/FitFriends',
    image: '/fitfriends-project.jpg',
    tags: ['React', 'Node.js', 'Fitness', 'Desktop App']
  }
];

const Projects: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box 
      id="projects" 
      sx={{ 
        py: { xs: 6, md: 10 }, 
        position: 'relative',
        maxWidth: '2000px',
        mx: 'auto',
        px: { xs: 2, md: 4, lg: 5 }
      }}
    >      {/* Minimalist decorative element */}
      <Box 
        sx={{
          position: 'absolute',
          top: 100,
          right: 0,
          width: '300px',
          height: '300px',
          background: 'repeating-linear-gradient(45deg, #f9f9f9, #f9f9f9 10px, #f5f5f5 10px, #f5f5f5 20px)',
          zIndex: -1
        }}
      />
      
      {/* Section heading */}
      <Box 
        sx={{ 
          mb: { xs: 6, md: 8 },
          maxWidth: '95%',
          position: 'relative'
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 2,
            fontSize: { xs: '3rem', sm: '3.5rem', md: '4.2rem' },
            fontWeight: 900,
            letterSpacing: '-0.03em',
          }}
        >          <Box 
            component="span" 
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '16px',
                left: 0,
                bottom: '12px',
                background: '#000000',
                opacity: 0.1,
                borderRadius: '4px',
                zIndex: -1,
              }
            }}
          >
            Projects
          </Box> 
          <Box component="span"> I've Built</Box>
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4, 
            color: "black",
            fontSize: { xs: '1.25rem', md: '1.4rem' },
            maxWidth: '900px',
            lineHeight: 1.6
          }}
        >
          A collection of projects that showcase my skills and experience in machine learning, 
          data science, and software development.
        </Typography>
      </Box>
      
      {/* Project grid with asymmetric layout */}
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
          gap: { xs: 5, md: 6 }
        }}
      >
        {projectsData.map((proj, idx) => (
          <Box 
            key={idx} 
            sx={{ 
              gridColumn: {
                xs: 'span 12',
                md: 'span 6',
                lg: idx % 3 === 0 ? 'span 8' : 'span 4'
              },
              display: 'flex'
            }}
          >            <Card 
              elevation={0}
              sx={{ 
                height: '100%', 
                width: '100%',
                display: 'flex', 
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: '4px',
                backgroundColor: '#ffffff',
                border: '1px solid #000000',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }
              }}
            >                <CardMedia
                component="div"
                sx={{
                  height: { xs: 220, md: 250 },
                  backgroundImage: `url(${'https://via.placeholder.com/1000x600?text=' + proj.name})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  filter: 'grayscale(100%)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%)',
                  }
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: { xs: 3.5, md: 4.5 } }}>
                <Box sx={{ mb: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                      letterSpacing: '-0.01em',
                      color: '#121212' // Dark text for white card
                    }}
                  >
                    {proj.name}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: '#505050', // Darker gray for better visibility
                      fontWeight: 500,
                      fontSize: '1.1rem'
                    }}
                  >
                    {proj.period}
                  </Typography>
                </Box>
                  <Typography 
                  variant="body1"
                  sx={{ 
                    mb: 3.5,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.2rem', md: '1.3rem' },
                    color: '#333333' // Dark text for white card
                  }}
                >
                  {proj.description}
                </Typography>
                
                <Stack 
                  direction="row" 
                  spacing={1}
                  sx={{ 
                    mb: 4,
                    flexWrap: 'wrap',
                    gap: 1.5
                  }}
                >                  {proj.tags.map((tag, i) => (                    <Chip 
                      key={i} 
                      label={tag} 
                      size="medium"
                      sx={{ 
                        fontWeight: 600,
                        borderRadius: '2px',
                        fontSize: '0.9rem',
                        py: 0.75,
                        px: 1,
                        color: '#000000',
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #e0e0e0'
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
              
              <CardActions sx={{ px: 4, pb: 4, pt: 0 }}>
                  <Button 
                  startIcon={<CodeIcon fontSize="medium" />} 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderRadius: '2px',
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 2.5,
                    py: 1,
                    color: '#000000',
                    borderColor: '#000000',
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.05)',
                      borderColor: '#000000',
                    }
                  }}
                >
                  Code
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
