import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ViewCompactRoundedIcon from '@mui/icons-material/ViewCompactRounded';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
import InputRoundedIcon from '@mui/icons-material/InputRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import WebAssetRoundedIcon from '@mui/icons-material/WebAssetRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface MenuItem {
  text: string;
  icon: React.ReactElement;
  selected?: boolean;
  children?: { text: string }[];
}

interface MenuSection {
  label: string;
  items: MenuItem[];
}

interface MenuContentProps {
  collapsed?: boolean;
}

const menuSections: MenuSection[] = [
  {
    label: 'Manage',
    items: [
      { text: 'Dashboard', icon: <DashboardRoundedIcon />, selected: true },
      { text: 'Account', icon: <AccountCircleRoundedIcon /> },
      { text: 'User', icon: <PeopleRoundedIcon /> },
      { text: 'Billing', icon: <ReceiptRoundedIcon /> },
      { text: 'Blog', icon: <ArticleRoundedIcon /> },
      { text: 'Setting', icon: <SettingsRoundedIcon /> },
    ],
  },
  {
    label: 'UI Elements',
    items: [
      {
        text: 'Data Display',
        icon: <ViewCompactRoundedIcon />,
        children: [{ text: 'Tables' }, { text: 'Lists' }, { text: 'Cards' }],
      },
      {
        text: 'Feedback',
        icon: <FeedbackRoundedIcon />,
        children: [{ text: 'Alerts' }, { text: 'Snackbar' }, { text: 'Dialog' }],
      },
      {
        text: 'Inputs',
        icon: <InputRoundedIcon />,
        children: [{ text: 'Text Fields' }, { text: 'Selects' }, { text: 'Buttons' }],
      },
      {
        text: 'Navigation',
        icon: <ExploreRoundedIcon />,
        children: [{ text: 'Tabs' }, { text: 'Breadcrumbs' }, { text: 'Menu' }],
      },
      {
        text: 'Surface',
        icon: <WebAssetRoundedIcon />,
        children: [{ text: 'Paper' }, { text: 'Card' }, { text: 'Accordion' }],
      },
      {
        text: 'Utils',
        icon: <BuildRoundedIcon />,
        children: [{ text: 'Modal' }, { text: 'Popover' }, { text: 'Tooltip' }],
      },
    ],
  },
  {
    label: 'Plugins',
    items: [
      { text: 'Color Picker', icon: <ColorLensRoundedIcon /> },
      { text: 'Calendar', icon: <CalendarMonthRoundedIcon /> },
      { text: 'Dropzone', icon: <CloudUploadRoundedIcon /> },
      { text: 'Quill Editor', icon: <EditNoteRoundedIcon /> },
      { text: 'Chart', icon: <BarChartRoundedIcon /> },
    ],
  },
];

export default function MenuContent({ collapsed = false }: MenuContentProps) {
  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({});

  const handleToggle = (text: string) => {
    setOpenMenus((prev) => ({ ...prev, [text]: !prev[text] }));
  };

  return (
    <Box sx={{ overflow: 'auto', flexGrow: 1, px: 1, py: 0.5 }}>
      {menuSections.map((section) => (
        <Box key={section.label} sx={{ mb: 0.5 }}>
          {!collapsed && (
            <Typography
              variant="caption"
              sx={{
                px: 2,
                pt: 2,
                pb: 0.5,
                display: 'block',
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {section.label}
            </Typography>
          )}
          {collapsed && <Box sx={{ pt: 1 }} />}
          <List dense disablePadding>
            {section.items.map((item) => (
              <React.Fragment key={item.text}>
                <ListItem disablePadding sx={{ display: 'block' }} >
                  <Tooltip title={collapsed ? item.text : ''} placement="right">
                    <ListItemButton
                      selected={item.selected}
                      onClick={item.children && !collapsed ? () => handleToggle(item.text) : undefined}
                      sx={{
                        borderRadius: 2,
                        mb: 0.3,
                        minHeight: 40,
                        justifyContent: collapsed ? 'center' : 'flex-start',
                        px: collapsed ? 1 : 1.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: collapsed ? 0 : 36,
                          justifyContent: 'center',
                          color: 'text.secondary',
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      {!collapsed && (
                        <>
                          <ListItemText
                            primary={item.text}
                            slotProps={{
                              primary: {
                                sx: {
                                  fontSize: '0.84rem',
                                  fontWeight: item.selected ? 600 : 400,
                                },
                              },
                            }}
                          />
                          {item.children &&
                            (openMenus[item.text] ? (
                              <ExpandLess sx={{ fontSize: '1.1rem', color: 'text.secondary' }} />
                            ) : (
                              <ExpandMore sx={{ fontSize: '1.1rem', color: 'text.secondary' }} />
                            ))}
                        </>
                      )}
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
                {!collapsed && item.children && (
                  <Collapse in={openMenus[item.text]} timeout="auto" unmountOnExit>
                    <List dense disablePadding sx={{ pl: 2 }}>
                      {item.children.map((child) => (
                        <ListItem key={child.text} disablePadding>
                          <ListItemButton
                            sx={{
                              borderRadius: 2,
                              minHeight: 34,
                              pl: 4,
                            }}
                          >
                            <ListItemText
                              primary={child.text}
                              slotProps={{
                                primary: {
                                  sx: {
                                    fontSize: '0.8rem',
                                    color: 'text.secondary',
                                  },
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}
