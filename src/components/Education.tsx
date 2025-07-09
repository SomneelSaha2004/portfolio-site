// src/components/Education.tsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const educationData = [
  {
    institution: 'National University of Singapore (NUS)',
    degree: 'B.Comp (Computer Science – AI & Database Systems)',
    period: '2023 – May 2027 (Expected)',
    gpa: '4.03/5.0'
  },
  {
    institution: 'The Shri Ram School – Aravali, India',
    degree: 'ISC: 97.5% (2023); ICSE: 98% (2021)',
    period: ''
  }
];

const Education: React.FC = () => (
  <Box id="education" sx={{ mb: 6 }}>
    <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
      Education
    </Typography>
    {educationData.map((edu, idx) => (
      <Box key={idx} sx={{ 
        mb: 4,
        p: 3,
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        textAlign: 'left',
      }}>        <Typography variant="h6" sx={{ color: '#000000', fontWeight: 700 }}>
          {edu.institution}
        </Typography><Typography variant="subtitle1" sx={{ color: '#000000', fontWeight: 600 }}>
          {edu.degree}
          {edu.gpa ? ` · GPA: ${edu.gpa}` : ''}
        </Typography>
        {edu.period && (
          <Typography variant="body2" sx={{ color: '#000000', mt: 1 }}>
            {edu.period}
          </Typography>
        )}
      </Box>
    ))}
  </Box>
);

export default Education;
