import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import MenuContent from './MenuContent';
import OptionsMenu from './OptionsMenu';
import AppLogo from './AppLogo';

const drawerWidth = 260;
const collapsedWidth = 72;

const Drawer = styled(MuiDrawer)<{ collapsed?: boolean }>(({ collapsed }) => ({
  width: collapsed ? collapsedWidth : drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  transition: 'width 0.2s ease',
  [`& .${drawerClasses.paper}`]: {
    width: collapsed ? collapsedWidth : drawerWidth,
    boxSizing: 'border-box',
    overflowX: 'hidden',
    transition: 'width 0.2s ease',
  },
}));

interface SideMenuLogoProps {
  collapsed: boolean;
  onToggle: () => void;
}

function SideMenuLogo({ collapsed, onToggle }: SideMenuLogoProps) {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
        px: collapsed ? 1 : 2,
        height: 64,
        mt: 'calc(var(--template-frame-height, 0px) + 4px)',
        flexShrink: 0,
      }}
    >
      {!collapsed && (
        <AppLogo />
      )}
      <Tooltip title={collapsed ? 'Expand sidebar' : ''} placement="right">
        <IconButton size="small" onClick={onToggle} sx={{ color: 'text.secondary' }}>
          {collapsed ? <MenuRoundedIcon fontSize="small" /> : <MenuOpenRoundedIcon fontSize="small" />}
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default function SideMenu() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Drawer
      variant="permanent"
      collapsed={collapsed}
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      }}
    >
      <SideMenuLogo collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      <Divider />
      <Box
        sx={{
          overflow: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MenuContent collapsed={collapsed} />
      </Box>
      <Stack
        direction="row"
        sx={{
          p: collapsed ? 1 : 2,
          gap: 1,
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Tooltip title={collapsed ? 'Ally Allen' : ''} placement="right">
          <Avatar
            sizes="small"
            alt="Ally Allen"
            sx={{
              width: 36,
              height: 36,
              bgcolor: 'grey.300',
              color: 'text.secondary',
              fontSize: '0.85rem',
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            AA
          </Avatar>
        </Tooltip>
        {!collapsed && (
          <>
            <Box sx={{ mr: 'auto', minWidth: 0 }}>
              <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }} noWrap>
                Ally Allen
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }} noWrap>
                ally.allen@example.com
              </Typography>
            </Box>
            <OptionsMenu />
          </>
        )}
      </Stack>
    </Drawer>
  );
}
