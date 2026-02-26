import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#fff',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#111927',
      secondary: '#6c737f',
    },
    divider: '#e5e7eb',
    success: {
      main: '#10b981',
      light: '#d1fae5',
    },
    warning: {
      main: '#f59e0b',
      light: '#fef3c7',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 600,
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e5e7eb',
        },
        head: {
          fontWeight: 600,
          color: '#6c737f',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          minWidth: 'auto',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;

// Sidebar theme (dark)
export const sidebarTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
    },
    background: {
      default: '#1c2536',
      paper: '#1c2536',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9da4ae',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.Mui-selected': {
            backgroundColor: 'rgba(99, 102, 241, 0.16)',
            color: '#818cf8',
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241, 0.24)',
            },
            '& .MuiListItemIcon-root': {
              color: '#818cf8',
            },
          },
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 40,
          color: '#9da4ae',
        },
      },
    },
  },
});
