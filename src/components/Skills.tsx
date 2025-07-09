// src/components/Skills.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

interface SkillItem {
  name: string;
  logo: string;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

// Define skills organized by categories
const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: 'Python', logo: './images/skills/python.svg' },
      { name: 'Java', logo: './images/skills/java.svg' },
      { name: 'SQL', logo: './images/skills/sql.svg' },
      { name: 'C++', logo: './images/skills/cpp.svg' },
      { name: 'TypeScript', logo: './images/skills/typescript.svg' },
      { name: 'JavaScript', logo: './images/skills/javascript.svg' },
    ]
  },
  {
    title: "Frameworks/Libraries",
    items: [
      { name: 'PyTorch', logo: './images/skills/pytorch.svg' },
      { name: 'Pandas', logo: './images/skills/pandas.svg' },
      { name: 'Spark', logo: './images/skills/spark.svg' },
      { name: 'Hadoop', logo: './images/skills/hadoop.svg' },
      { name: 'React.js', logo: './images/skills/react.svg' },
      { name: 'Vite', logo: './vite.svg' },
    ]
  },
  {
    title: "Tools",
    items: [
      { name: 'Git', logo: './images/skills/git.svg' },
      { name: 'PostgreSQL', logo: './images/skills/postgresql.svg' },
      { name: 'Linux', logo: './images/skills/linux.svg' },
      { name: 'PowerShell', logo: './images/skills/powershell.svg' },
    ]
  }
];

const Skills: React.FC = () => {
  const theme = useTheme();
    return (
    <Box 
      id="skills" 
      sx={{ 
        py: { xs: 6, md: 10 }, 
        position: 'relative',
        maxWidth: '1400px',
        mx: 'auto',
        px: { xs: 2, md: 4, lg: 5 }
      }}
    >
      {/* No decorative background elements for minimalist design */}
      
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
            Tools
          </Box> 
          <Box component="span"> & Technologies</Box>
        </Typography>
      </Box>
        {/* Skills categories */}
      <Card
        elevation={0}
        sx={{ 
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: { xs: 3, md: 5 },
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          mb: 6
        }}
      >
        {skillCategories.map((category, catIndex) => (
          <Box key={catIndex} sx={{ mb: catIndex === skillCategories.length - 1 ? 0 : 5 }}>
            {/* Category heading */}
            <Typography
              variant="h4"
              sx={{ 
                mb: 3, 
                fontWeight: 700,
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                color: '#000000'
              }}
            >
              {category.title}
            </Typography>
            
            {/* Skills grid */}
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: { xs: 2, md: 3 },
              mb: 2
            }}>
              {category.items.map((skill, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: { xs: 'calc(33.33% - 16px)', sm: 'calc(20% - 16px)', md: 'calc(16.666% - 16px)' },
                    mb: 2
                  }}
                >                  {/* Circular logo container */}
                  <Box
                    sx={{
                      width: { xs: 80, md: 96 },
                      height: { xs: 80, md: 96 },
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      p: 2
                    }}
                  >
                    <Box 
                      component="img"
                      src={skill.logo} 
                      alt={`${skill.name} logo`}
                      sx={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                  
                  {/* Skill name */}
                  <Typography 
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      textAlign: 'center',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      color: '#000000'
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>        ))}
      </Card>
    </Box>
  );
};

export default Skills;
