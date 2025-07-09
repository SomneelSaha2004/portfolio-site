// src/theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Minimalist black and white scheme with accent color
const accentColor = '#6366f1'; // Purple accent for emphasis only
const pureBlack = '#000000';
const pureWhite = '#ffffff';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: { 
      main: pureBlack,
      light: '#333333',
      dark: '#000000',
      contrastText: pureWhite
    },
    secondary: { 
      main: accentColor, // Keep purple as accent color
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: pureWhite
    },
    background: {
      default: pureWhite, // Pure white background
      paper: '#ffffff', // White for cards
    },
    text: {
      primary: pureBlack, // Pure black text
      secondary: '#555555', // Dark gray for secondary text
    },
    // Extended palette for accents and UI elements
    info: { main: accentColor },
    success: { main: '#000000' },
    warning: { main: '#000000' },
    error: { main: '#000000' }, 
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },  typography: {
    fontFamily: [
      'Inter',
      'Helvetica Neue',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { 
      fontSize: '5.5rem', 
      fontWeight: 900, // Extra bold for hero text
      letterSpacing: '-0.05em',
      lineHeight: 1.05,
      color: '#000000'
    },
    h2: { 
      fontSize: '3.5rem', 
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      color: '#000000'
    },
    h3: { 
      fontSize: '2.4rem', 
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#000000' 
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.3,
      color: '#000000'
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#000000'
    },
    body1: { 
      fontSize: '1.125rem', 
      lineHeight: 1.8,
      fontWeight: 400,
      color: '#000000'
    },
    body2: { 
      fontSize: '1rem', 
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#000000'
    },
    button: { 
      fontWeight: 600, 
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
    subtitle1: { 
      fontSize: '1.3rem', 
      fontWeight: 500, 
      letterSpacing: '-0.01em',
      lineHeight: 1.5,
      color: '#000000'
    },
    caption: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
      color: '#555555'
    }
  },  spacing: 8, // Base spacing unit
  shape: { borderRadius: 8 }, // Smaller border radius for minimalist style
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundPosition: '-19px -19px',
          overflowX: 'hidden',
          backgroundColor: '#ffffff'
        },
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#000000', // Black background
          color: '#ffffff',
          boxShadow: 'none',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4, // More angular for minimalist style
          textTransform: 'none',
          padding: '12px 24px',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          },
          '&.MuiButton-contained': {
            borderRadius: 4,
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
            background: '#000000',
            color: '#ffffff',
            '&:hover': {
              background: '#333333',
            }
          },
          '&.MuiButton-outlined': {
            borderWidth: '1px',
            borderColor: '#000000',
            color: '#000000',
            '&:hover': {
              borderColor: '#000000',
              background: 'rgba(0, 0, 0, 0.05)'
            }
          }
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#ffffff',
          backgroundImage: 'none',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 8,
          '&.MuiDialog-paper': {
            borderRadius: 8,
          }
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          position: 'relative',
          zIndex: 1
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4': {
            '& .highlight': {
              color: '#6366f1', // Keep accent color for highlighted text
              position: 'relative',
              display: 'inline-block',
              zIndex: 1,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '0px',
                left: '-2px',
                right: '-2px',
                height: '30%',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                zIndex: -1,
                borderRadius: '2px',
              }
            }
          }
        }
      }
    },
    
    // Enhance cards for minimalist look
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': {
            paddingBottom: '24px'
          }
        }
      }
    },
    
    // Enhance chips for minimalist style
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 500,
          fontSize: '0.85rem',
          padding: '0 8px',
          height: '30px',
          '&.MuiChip-filled': {
            background: 'rgba(0, 0, 0, 0.05)',
            color: '#000000',
          }
        },
        label: {
          padding: '0 10px'
        }
      }
    }
  },
});
theme = responsiveFontSizes(theme);
export default theme;
