// src/components/Experience.tsx
import React from 'react';
import {
  Timeline, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot
} from '@mui/lab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const experienceData = [
  {
    company: 'MathLogic Consulting, Gurgaon',
    role: 'Machine Learning Intern',
    period: 'May 2025 – Present',
    details: [
      'Researched tabular-data applications of transformer architectures (e.g., TabPFN, TabICL)',
      'Performed decile-based calibration and performance analysis',
      'Collaborated with data engineers to integrate models into production pipelines'
    ]
  },
  {
    company: 'MathLogic Consulting, Gurgaon',
    role: 'Data Science Intern',
    period: 'Dec 2024 – Jan 2025',
    details: [
      'Built ML pipelines for farmland segmentation using satellite imagery',
      'Engineered spectral and textural features for improved segmentation accuracy'
    ]
  },
  {
    company: 'ContractKen Inc., Bangalore',
    role: 'Software Engineering Intern',
    period: 'May 2024 – Jul 2024',
    details: [
      'Developed React/Node multi-threaded bulk-upload module handling 100+ PDFs',
      'Reduced client ingestion time from 2h to 15min by optimizing backend processes'
    ]
  },
  {
    company: 'ContractKen Inc., Bangalore',
    role: 'NLP Research Intern',
    period: 'May 2022 – Jul 2022',
    details: [
      'Evaluated LexNLP for named entity recognition on legal contracts'
    ]
  }
];

const Experience: React.FC = () => (
  <Box id="experience" sx={{ py: 6, px: 4, textAlign: 'left' }}>
    <Typography variant="h4" gutterBottom>Experience</Typography>
    <Timeline position="alternate">
      {experienceData.map((exp, idx) => (
        <TimelineItem key={idx}>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#6366f1' }} />
            {idx < experienceData.length - 1 && <TimelineConnector sx={{ backgroundColor: '#6366f1' }} />}
          </TimelineSeparator>
          <TimelineContent sx={{ 
            backgroundColor: '#ffffff', 
            p: 3, 
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            mb: 4
          }}>            <Typography variant="h6" sx={{ color: '#000000' }}>{exp.company}</Typography>
            <Typography variant="subtitle2" sx={{ color: '#000000', fontWeight: 600 }}>
              {exp.role} · {exp.period}
            </Typography>
            <ul style={{ color: '#000000' }}>
              {exp.details.map((d,i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Box>
);

export default Experience;
