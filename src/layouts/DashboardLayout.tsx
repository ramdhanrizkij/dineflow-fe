import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import AppNavbar from '../components/AppNavbar';

const DRAWER_WIDTH = 280;

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <SideMenu />
      <AppNavbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box sx={{ flexGrow: 1, overflow: 'auto', mt: { xs: 7, md: 0 } }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
