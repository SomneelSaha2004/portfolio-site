// src/App.tsx
import React, { useEffect, useState, useRef } from 'react';
import Hero from './components/Hero';
import CombinedTimeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from './components/BackToTop';
import Box from '@mui/material/Box';

// Grid decoration component with minimal black and white effect
const GridDecoration = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the transition based on scroll position
  // Max transition around 2500px of scroll for a gradual effect
  const scrollFactor = Math.min(scrollPosition / 2500, 1);
  
  // Simple opacity change based on scroll
  const backgroundOpacity = 0.05 + (scrollFactor * 0.02); // Subtle change in grid pattern opacity
  const accentOpacity = scrollFactor * 0.08; // Controls accent element visibility

  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 0,
      background: '#ffffff', // Pure white background
    }}>
      {/* Main grid background pattern */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: backgroundOpacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.8'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20H0V20h20zm20 0v20H20V20h20zM20 0v20H0V0h20zm20 0v20H20V0h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Minimal accent elements */}
      <Box sx={{
        position: 'absolute',
        top: '5%',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(0, 0, 0, 0.025)', // Very subtle gray
        filter: 'blur(100px)',
      }} />
      
      <Box sx={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(0, 0, 0, 0.02)', // Very subtle gray
        filter: 'blur(90px)',
      }} />
      
      {/* Subtle accent color - only visible element with color */}
      <Box sx={{
        position: 'absolute',
        top: '40%',
        left: '15%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'rgba(99, 102, 241, 0.03)', // Very subtle purple accent
        filter: 'blur(60px)',
        opacity: accentOpacity,
      }} />
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <Box sx={{ 
      position: 'relative',
      height: '100vh', // Fixed height
      overflow: 'hidden', // Hide overflow
      background: '#ffffff' // Pure white background
    }}>
      {/* Background decorations */}
      <GridDecoration />
      
      {/* Main content */}
      <Box 
        component="main"
        sx={{ 
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '100vw',
          height: '100vh', // Set container to viewport height
          overflowY: 'scroll', // Enable scrolling
          scrollSnapType: 'y mandatory', // Enable scroll snapping on the y-axis
          scrollBehavior: 'smooth', // Smooth scrolling animation
          '&::-webkit-scrollbar': {
            display: 'none' // Hide scrollbar for Chrome/Safari
          },
          scrollbarWidth: 'none', // Hide scrollbar for Firefox
          msOverflowStyle: 'none' // Hide scrollbar for IE/Edge
        }}
      >
        {/* Landing section */}
        <Box 
          sx={{
            scrollSnapAlign: 'start', // Snap to this section
            height: '100vh', // Full viewport height
            width: '100%',
            color: 'black' // Black text for minimalist theme
          }}
        >
          <Hero />
        </Box>
        
        {/* Content sections with full width and snap scrolling */}
        <Box 
          sx={{ 
            width: '100%', 
            color: 'black',
            scrollSnapAlign: 'start', // Snap to this section
            minHeight: '100vh', // At least full viewport height
          }}
        >
          <CombinedTimeline />
        </Box>
        
        <Box 
          sx={{ 
            width: '100%', 
            color: 'black',
            scrollSnapAlign: 'start', // Snap to this section
            minHeight: '100vh', // At least full viewport height
          }}
        >
          <Projects />
        </Box>
        
        <Box 
          sx={{ 
            width: '100%', 
            color: 'black',
            scrollSnapAlign: 'start', // Snap to this section
            minHeight: '100vh', // At least full viewport height
          }}
        >
          <Skills />
        </Box>
        
        <Box 
          sx={{ 
            width: '100%', 
            color: 'black',
            scrollSnapAlign: 'start', // Snap to this section
            minHeight: '100vh', // At least full viewport height
            mb: 6
          }}
        >
          <Contact />
        </Box>
      </Box>
      
      {/* Back to top button - black in color */}
      <BackToTop />
      
    </Box>
  );
};

export default App;
