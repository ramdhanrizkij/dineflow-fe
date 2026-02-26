import { styled, ThemeProvider } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { sidebarTheme } from '../theme';
import MenuContent from './MenuContent';

const drawerWidth = 280;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#1c2536',
    borderRight: 'none',
  },
});

export default function SideMenu() {
  return (
    <ThemeProvider theme={sidebarTheme}>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        {/* Logo & Workspace Selector */}
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
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

          <Select
            fullWidth
            defaultValue="workspace-1"
            size="small"
            IconComponent={UnfoldMoreRoundedIcon}
            sx={{
              bgcolor: 'rgba(255,255,255,0.05)',
              color: '#fff',
              borderRadius: 1,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.12)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255,255,255,0.2)',
              },
              [`& .${selectClasses.select}`]: {
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                pl: 1,
              },
              [`& .${selectClasses.icon}`]: {
                color: '#9da4ae',
              },
            }}
          >
            <MenuItem value="workspace-1">
              <ListItemAvatar sx={{ minWidth: 36 }}>
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    fontSize: '0.75rem',
                    bgcolor: '#6366f1',
                  }}
                >
                  D
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Dineflow"
                secondary="Production"
                primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                secondaryTypographyProps={{ fontSize: '0.75rem' }}
              />
            </MenuItem>
          </Select>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />

        {/* Navigation */}
        <Box
          sx={{
            overflow: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MenuContent />
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}
