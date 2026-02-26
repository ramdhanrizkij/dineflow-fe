import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

interface NavItem {
  text: string;
  icon?: React.ReactElement;
  path?: string;
  children?: { text: string; path: string }[];
}

const dashboardItems: NavItem[] = [
  { text: 'Overview', icon: <HomeRoundedIcon />, path: '/' },
  { text: 'Analytics', icon: <AnalyticsRoundedIcon />, path: '/analytics' },
  { text: 'E-commerce', icon: <StorefrontRoundedIcon />, path: '/e-commerce' },
  { text: 'Crypto', icon: <CurrencyBitcoinRoundedIcon />, path: '/crypto' },
];

const generalItems: NavItem[] = [
  { text: 'Settings', icon: <SettingsRoundedIcon />, path: '/settings' },
  {
    text: 'Customers',
    icon: <PeopleRoundedIcon />,
    children: [
      { text: 'List customers', path: '/customers' },
      { text: 'Customer details', path: '/customers/details' },
    ],
  },
  {
    text: 'Products',
    icon: <ShoppingBagRoundedIcon />,
    children: [
      { text: 'List products', path: '/products' },
      { text: 'Create product', path: '/products/create' },
      { text: 'Product details', path: '/products/details' },
    ],
  },
  { text: 'Orders', icon: <ShoppingCartRoundedIcon />, path: '/orders' },
  { text: 'Invoices', icon: <ReceiptRoundedIcon />, path: '/invoices' },
  { text: 'Jobs', icon: <WorkRoundedIcon />, path: '/jobs' },
  { text: 'Logistics', icon: <LocalShippingRoundedIcon />, path: '/logistics' },
  { text: 'Blog', icon: <ArticleRoundedIcon />, path: '/blog' },
];

function NavSection({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({});

  // Auto-expand menu that contains current path
  React.useEffect(() => {
    items.forEach((item) => {
      if (item.children) {
        const isChildActive = item.children.some(
          (child) => child.path === location.pathname
        );
        if (isChildActive) {
          setOpenMenus((prev) => ({ ...prev, [item.text]: true }));
        }
      }
    });
  }, [location.pathname, items]);

  const handleToggle = (text: string) => {
    setOpenMenus((prev) => ({ ...prev, [text]: !prev[text] }));
  };

  const isSelected = (path?: string) => {
    if (!path) return false;
    return location.pathname === path;
  };

  return (
    <Box sx={{ px: 2, py: 1 }}>
      <Typography
        variant="overline"
        sx={{
          color: '#9da4ae',
          fontSize: '0.6875rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          pl: 1,
          mb: 0.5,
          display: 'block',
        }}
      >
        {title}
      </Typography>
      <List dense disablePadding>
        {items.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding sx={{ display: 'block', mb: 0.25 }}>
              <ListItemButton
                selected={isSelected(item.path)}
                onClick={() => {
                  if (item.children) {
                    handleToggle(item.text);
                  } else if (item.path) {
                    navigate(item.path);
                  }
                }}
                sx={{
                  borderRadius: 1,
                  py: 0.75,
                  px: 1.5,
                  minHeight: 36,
                }}
              >
                {item.icon && (
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: isSelected(item.path) ? 600 : 400,
                  }}
                />
                {item.children &&
                  (openMenus[item.text] ? (
                    <ExpandLess sx={{ fontSize: '1.25rem', color: '#9da4ae' }} />
                  ) : (
                    <ExpandMore sx={{ fontSize: '1.25rem', color: '#9da4ae' }} />
                  ))}
              </ListItemButton>
            </ListItem>

            {item.children && (
              <Collapse in={openMenus[item.text]} timeout="auto" unmountOnExit>
                <List dense disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.text} disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        selected={isSelected(child.path)}
                        onClick={() => navigate(child.path)}
                        sx={{
                          borderRadius: 1,
                          py: 0.5,
                          pl: 6.5,
                          pr: 1.5,
                          minHeight: 32,
                        }}
                      >
                        <ListItemText
                          primary={child.text}
                          primaryTypographyProps={{
                            fontSize: '0.8125rem',
                            fontWeight: isSelected(child.path) ? 600 : 400,
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
  );
}

export default function MenuContent() {
  return (
    <Box sx={{ flexGrow: 1, py: 1 }}>
      <NavSection title="Dashboards" items={dashboardItems} />
      <NavSection title="General" items={generalItems} />
    </Box>
  );
}
