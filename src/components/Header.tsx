import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        py: 1,
        px: 3,
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        minHeight: 56,
      }}
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Tooltip title="Search">
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <SearchRoundedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <Badge
              color="error"
              variant="dot"
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <NotificationsNoneRoundedIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Contacts">
          <IconButton size="small" sx={{ color: 'text.secondary' }}>
            <PeopleOutlineRoundedIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Language">
          <IconButton size="small" sx={{ color: 'text.secondary', px: 0.5 }}>
            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="EN"
              style={{ width: 20, height: 14, borderRadius: 2 }}
            />
          </IconButton>
        </Tooltip>

        <Avatar
          sx={{
            width: 36,
            height: 36,
            ml: 1,
            bgcolor: '#6366f1',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          U
        </Avatar>
      </Stack>
    </Stack>
  );
}
