import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Search from './Search';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        backgroundColor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
        height: 64,
        mt: 'calc(var(--template-frame-height, 0px) + 4px)',
        px: 3,
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
        <Search />
        <MenuButton aria-label="AI Assistant">
          <AutoFixHighRoundedIcon />
        </MenuButton>
        <ColorModeIconDropdown />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <Stack
          direction="row"
          spacing={1}
          onClick={handleClick}
          sx={{
            alignItems: 'center',
            ml: 1,
            pl: 1,
            borderLeft: '1px solid',
            borderColor: 'divider',
            cursor: 'pointer',
            borderRadius: 2,
            '&:hover': { opacity: 0.8 },
          }}
        >
          <Avatar
            alt="John Charly"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 36, height: 36 }}
          />
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, lineHeight: '18px', color: 'text.primary' }}
            >
              John Charly
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'text.secondary', lineHeight: '14px' }}
            >
              Super Admin
            </Typography>
          </Box>
        </Stack>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          slotProps={{
            paper: {
              sx: {
                mt: 1,
                minWidth: 180,
                borderRadius: 2,
                boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
              },
            },
          }}
        >
          <MuiMenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>My Profile</ListItemText>
          </MuiMenuItem>
          <MuiMenuItem onClick={handleClose}>
            <ListItemIcon>
              <SettingsRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MuiMenuItem>
          <Divider />
          <MuiMenuItem onClick={handleClose}>
            <ListItemIcon>
              <LogoutRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MuiMenuItem>
        </Menu>
      </Stack>
    </Stack>
  );
}
