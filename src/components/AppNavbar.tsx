import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuContent from './MenuContent';
import { sidebarTheme } from '../theme';

const Toolbar = styled(MuiToolbar)({
  width: '100%',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export default function AppNavbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: 'flex', md: 'none' },
          boxShadow: 0,
          bgcolor: 'background.paper',
          backgroundImage: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar variant="dense">
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.75rem' }}>
                D
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, fontSize: '1rem' }}>
              Dineflow
            </Typography>
          </Stack>
          <IconButton onClick={toggleDrawer(true)} size="small">
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <ThemeProvider theme={sidebarTheme}>
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              width: 280,
              bgcolor: '#1c2536',
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem' }}>
                  D
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.125rem' }}>
                Dineflow
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
          <MenuContent />
        </Drawer>
      </ThemeProvider>
    </>
  );
}
