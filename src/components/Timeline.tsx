// src/components/Timeline.tsx
import React, { useState } from 'react';
import {
  Timeline as MuiTimeline, 
  TimelineItem, 
  TimelineSeparator,
  TimelineConnector, 
  TimelineContent, 
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { useTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// Education data
const educationData = [
  {
    institution: 'National University of Singapore (NUS)',
    degree: 'B.Comp (Computer Science – AI & Database Systems)',
    period: '2023 – May 2027 (Expected)',
    gpa: '4.03/5.0',
    year: 2023,
    coursework: 'Foundations of Machine Learning, Linear Algebra, Data Structures and Algorithms, Database Systems, Software Engineering, Operating Systems, Big Data Systems'
  },
  {
    institution: 'The Shri Ram School – Aravali, India',
    degree: 'ISC: 97.5% (2023); ICSE: 98% (2021)',
    period: '2021 - 2023',
    year: 2021,
  }
];

// Experience data
const experienceData = [
  {
    company: 'MathLogic Consulting, Gurgaon',
    role: 'Machine Learning Intern',
    period: 'May 2025 – Present',
    year: 2025,
    details: [
      'Conducted research on transformer-based models for tabular data, focusing on their efficiency in capturing 2-D dependencies, optimizing inference speed, and improving prediction accuracy',
      'Developied and optimized machine learning models using AutoGluon and Optuna for tabular data, focusing on performance tuning, hyperparameter optimization, and ensemble methods.',
    ]
  },
  {
    company: 'MathLogic Consulting, Gurgaon',
    role: 'Data Science Intern',
    period: 'Dec 2024 – Jan 2025',
    year: 2024,
    details: [
      'Built ML pipelines for farmland segmentation using satellite imagery',
      'Engineered spectral and textural features for improved segmentation accuracy'
    ]
  },
  {
    company: 'ContractKen Inc., Bangalore',
    role: 'Software Engineering Intern',
    period: 'May 2024 – Jul 2024',
    year: 2024,
    details: [
      'Developed React/Node multi-threaded bulk-upload module handling 100+ PDFs',
      'Reduced client ingestion time from 2h to 15min by optimizing backend processes'
    ]
  },
  {
    company: 'ContractKen Inc., Bangalore',
    role: 'NLP Research Intern',
    period: 'May 2022 – Jul 2022',
    year: 2022,
    details: [
      'Evaluated LexNLP for named entity recognition on legal contracts'
    ]
  }
];


// Combined and sorted timeline items
type TimelineItemType = 
  | ({ type: 'education' } & typeof educationData[0])
  | ({ type: 'experience' } & typeof experienceData[0]);

const timelineItems: TimelineItemType[] = [
  ...educationData.map(item => ({ ...item, type: 'education' as const })),
  ...experienceData.map(item => ({ ...item, type: 'experience' as const })),
].sort((a, b) => b.year - a.year); // Sort by year descending (newest first)

const CombinedTimeline: React.FC = () => {
  const theme = useTheme();
  // State to track which view is active (default to 'experience')
  const [activeView, setActiveView] = useState<'education' | 'experience'>('experience');
  
  // Filter timeline items based on active view
  const filteredItems = timelineItems.filter(item => item.type === activeView);
  
  return (    <Box 
      id="timeline" 
      sx={{ 
        py: { xs: 5, md: 8 }, 
        position: 'relative',
        maxWidth: '2000px',
        width: '100%',
        mx: 'auto',
        px: { xs: 2, md: 3, lg: 5 }
      }}
    >
      {/* Decorative background elements */}
      <Box 
        sx={{
          position: 'absolute',
          top: '30%',
          left: -100,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.primary.dark}15)`,
          filter: 'blur(120px)',
          zIndex: -1
        }}
      />
      
      {/* Section heading */}      <Box 
        sx={{ 
          mb: { xs: 5, md: 7 },
          position: 'relative',
          textAlign: 'left',
          px: { xs: 2, sm: 4 }
        }}
      >        <Typography 
          variant="h2" 
          sx={{ 
            mb: 2,
            fontSize: { xs: '3rem', sm: '3.5rem', md: '4.2rem' },
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#000000',
            textAlign: 'left'
          }}
        >
          <Box 
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
                background: theme.palette.primary.main,
                opacity: 0.15,
                borderRadius: '4px',
                zIndex: -1,
              }
            }}
          >
            Education and Experience
          </Box>
        </Typography>          <Typography 
          variant="body1" 
          sx={{ 
            mb: 4, 
            color: "black",
            fontSize: { xs: '1.25rem', md: '1.4rem' },
            maxWidth: '900px',
            lineHeight: 1.6,
            textAlign: 'left'
          }}
        >
          My academic and professional journey, showcasing key milestones and achievements.
        </Typography>        <Box 
          sx={{
            display: 'flex',
            mb: 5,
            justifyContent: 'flex-start',  // Always left-aligned
          }}
        >          <ToggleButtonGroup 
            value={activeView}
            exclusive
            onChange={(_, newView) => {
              if (newView !== null) {
                setActiveView(newView);
              }
            }}
            aria-label="timeline view toggle"
            sx={{ gap: 2 }}
          >
            <ToggleButton value="experience" aria-label="experience">
              <WorkIcon sx={{ mr: 1 }} />
              Experience
            </ToggleButton>
            <ToggleButton value="education" aria-label="education">
              <SchoolIcon sx={{ mr: 1 }} />
              Education
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>      <MuiTimeline position="alternate" sx={{ p: { xs: 0, md: 0 }, m: 0, width: '100%' }}>
        {filteredItems.map((item, index) => (
          <TimelineItem key={index}>            <TimelineOppositeContent 
              sx={{ 
                flex: { xs: 0.2, md: 0.15 },
                py: { xs: 2, md: 3 },
                pr: { xs: 1.5, md: 2 },
                // Always right aligned for consistency
                textAlign: 'right'
              }}
            >              <Typography 
                variant="subtitle1"
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  // Always right aligned for consistency
                  textAlign: 'right',
                  color: '#000000',
                  display: 'inline-block',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderRadius: '6px'
                }}
              >
                {item.period}
              </Typography>
            </TimelineOppositeContent>
              <TimelineSeparator>              <TimelineDot 
                color="inherit"
                variant="outlined"
                sx={{
                  borderWidth: 2,
                  borderColor: '#000000',
                  p: 1,
                  boxShadow: 'none',
                  color: '#000000',
                  backgroundColor: '#ffffff'
                }}
              >
                {item.type === 'education' ? 
                  <SchoolIcon fontSize="medium" /> : 
                  <WorkIcon fontSize="medium" />
                }
              </TimelineDot>{index < filteredItems.length - 1 && (                <TimelineConnector 
                  sx={{ 
                    height: 80,
                    backgroundColor: '#000000',
                    width: 2
                  }} 
                />
              )}
            </TimelineSeparator>            <TimelineContent sx={{ py: { xs: 1.5, md: 3 }, px: { xs: 1.5, md: 3 }, width: '100%', textAlign: 'left' }}>              <Paper 
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  border: '1px solid #000000',
                  borderRadius: '2px',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  width: '100%',
                  maxWidth: { xs: '100%', md: '98%' },
                  mx: 'auto',
                  textAlign: 'left'
                }}
              >
                {/* Organization logo */}
                <Box 
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    mb: 1
                  }}
                >                  <Box 
                    component="img" 
                    src={`./images/${
                      item.type === 'education' ? 
                        (item.institution.includes('Singapore') ? 'National_University_of_Singapore-Logo.wine.svg' : 'ShriRamLogo.png') : 
                        (item.company.includes('ContractKen') ? 'contractken.png' : 'mathlogic-logo-1.png')
                    }`}
                    alt={item.type === 'education' ? item.institution : item.company}
                    sx={{
                      height: { xs: '45px', md: '55px' },
                      width: 'auto',
                      maxWidth: '180px',
                      objectFit: 'contain',
                      mr: 2,
                      filter: 'grayscale(0)'
                    }}
                  />
                </Box>
                
                {/* Main content */}
                <Box sx={{ mt: 1 }}>                  <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 2,
                      fontSize: { xs: '1.4rem', md: '1.7rem' },
                      lineHeight: 1.3,
                      color: '#000000'
                    }}
                  >
                    {item.type === 'education' ? item.institution : item.company}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2,
                      fontWeight: 600,
                      fontSize: { xs: '1.2rem', md: '1.3rem' },
                      color: '#000000'
                    }}
                  >
                    {item.type === 'education' ? (
                      item.degree + (item.gpa ? ` • GPA: ${item.gpa}` : '')
                    ) : (
                      item.role
                    )}
                  </Typography>
                    {item.type === 'education' && item.coursework && (
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          mt: 1.5, 
                          fontWeight: 500, 
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          color: '#333333'
                        }}
                      >
                        <strong>Relevant Coursework:</strong> {item.coursework}
                      </Typography>
                    )}
                    {item.type === 'experience' && (
                    <Box 
                      component="ul" 
                      sx={{ 
                        pl: 4, // Increased indentation
                        mb: 0, 
                        mt: 2.5,
                        listStylePosition: 'outside',
                        listStyleType: 'disc',
                      }}
                    >                      {item.details.map((detail, i) => (                        <Typography 
                          component="li" 
                          variant="body1" 
                          key={i} 
                          sx={{ 
                            mb: 1.5, // Reduced spacing for more concise look
                            fontSize: { xs: '1rem', md: '1.05rem' },
                            '&::marker': {
                              color: '#000000',
                              fontSize: '1rem',
                            },
                            lineHeight: 1.5,
                            color: '#000000',
                            paddingLeft: '0.25rem', // Reduced space after bullet
                            display: 'list-item',
                            textAlign: 'left'
                          }}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </MuiTimeline>
    </Box>
  );
};

export default CombinedTimeline;
