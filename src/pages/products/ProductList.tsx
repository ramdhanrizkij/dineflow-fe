import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

type ProductStatus = 'Published' | 'Draft';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  sku: string;
  stock: number;
  price: number;
  status: ProductStatus;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Soja & Co. Eucalyptus',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=80&h=80&fit=crop',
    sku: '592_LDKDI',
    stock: 10,
    price: 65.99,
    status: 'Draft',
  },
  {
    id: 2,
    name: 'Necessaire Body Lotion',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=80&h=80&fit=crop',
    sku: '321_UWEAJT',
    stock: 5,
    price: 17.99,
    status: 'Published',
  },
  {
    id: 3,
    name: 'Ritual of Sakura',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=80&h=80&fit=crop',
    sku: '211_QFEXJO',
    stock: 8,
    price: 155.0,
    status: 'Draft',
  },
  {
    id: 4,
    name: 'Lancome Rouge',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=80&h=80&fit=crop',
    sku: '978_UBFGJC',
    stock: 0,
    price: 95.0,
    status: 'Published',
  },
  {
    id: 5,
    name: 'Erbology Aloe Vera',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop',
    sku: '401_1BBXBK',
    stock: 10,
    price: 24.0,
    status: 'Published',
  },
];

function StatusChip({ status }: { status: ProductStatus }) {
  return (
    <Chip
      label={status}
      size="small"
      icon={
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: status === 'Published' ? 'success.main' : 'text.secondary',
          }}
        />
      }
      sx={{
        bgcolor: 'transparent',
        color: status === 'Published' ? 'success.main' : 'text.secondary',
        fontWeight: 500,
        fontSize: '0.8125rem',
        '& .MuiChip-icon': {
          ml: 0.5,
        },
      }}
    />
  );
}

export default function ProductList() {
  const [tabValue, setTabValue] = React.useState(0);
  const [sortValue, setSortValue] = React.useState('newest');

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const filteredProducts = React.useMemo(() => {
    if (tabValue === 0) return products;
    if (tabValue === 1) return products.filter((p) => p.status === 'Published');
    if (tabValue === 2) return products.filter((p) => p.status === 'Draft');
    return products;
  }, [tabValue]);

  const publishedCount = products.filter((p) => p.status === 'Published').length;
  const draftCount = products.filter((p) => p.status === 'Draft').length;

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1400, mx: 'auto', width: '100%' }}>
      {/* Page Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Typography variant="h4" component="h1">
          Products
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          sx={{
            bgcolor: '#6366f1',
            '&:hover': { bgcolor: '#4f46e5' },
            px: 3,
            py: 1,
          }}
        >
          Add
        </Button>
      </Stack>

      {/* Content Card */}
      <Card sx={{ overflow: 'visible' }}>
        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                fontSize: '0.875rem',
              },
              '& .MuiTabs-indicator': {
                bgcolor: '#6366f1',
              },
            }}
          >
            <Tab
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  <span>All</span>
                  <Chip
                    label={products.length}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.75rem',
                      bgcolor: tabValue === 0 ? '#6366f1' : 'grey.200',
                      color: tabValue === 0 ? '#fff' : 'text.secondary',
                    }}
                  />
                </Stack>
              }
            />
            <Tab
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  <span>Published</span>
                  <Chip
                    label={publishedCount}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.75rem',
                      bgcolor: tabValue === 1 ? '#6366f1' : 'grey.200',
                      color: tabValue === 1 ? '#fff' : 'text.secondary',
                    }}
                  />
                </Stack>
              }
            />
            <Tab
              label={
                <Stack direction="row" spacing={1} alignItems="center">
                  <span>Draft</span>
                  <Chip
                    label={draftCount}
                    size="small"
                    sx={{
                      height: 20,
                      fontSize: '0.75rem',
                      bgcolor: tabValue === 2 ? '#6366f1' : 'grey.200',
                      color: tabValue === 2 ? '#fff' : 'text.secondary',
                    }}
                  />
                </Stack>
              }
            />
          </Tabs>
        </Box>

        {/* Filters Row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 2, py: 2 }}
        >
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<FilterListRoundedIcon />}
              sx={{
                borderColor: 'divider',
                color: 'text.primary',
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { borderColor: 'text.secondary', bgcolor: 'transparent' },
              }}
            >
              Category
            </Button>
            <Button
              variant="outlined"
              size="small"
              startIcon={<FilterListRoundedIcon />}
              sx={{
                borderColor: 'divider',
                color: 'text.primary',
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': { borderColor: 'text.secondary', bgcolor: 'transparent' },
              }}
            >
              SKU
            </Button>
          </Stack>

          <Select
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
            size="small"
            sx={{
              minWidth: 120,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'divider',
              },
            }}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
            <MenuItem value="price-asc">Price: Low to High</MenuItem>
            <MenuItem value="price-desc">Price: High to Low</MenuItem>
          </Select>
        </Stack>

        {/* Products Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ pl: 3, width: '35%' }}>Name</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right" sx={{ pr: 3 }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow
                  key={product.id}
                  hover
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    cursor: 'pointer',
                  }}
                >
                  <TableCell sx={{ pl: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        variant="rounded"
                        src={product.image}
                        alt={product.name}
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 1,
                        }}
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600, color: 'text.primary' }}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary' }}
                        >
                          in {product.category}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {product.sku}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {product.stock}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      ${product.price.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <StatusChip status={product.status} />
                  </TableCell>
                  <TableCell align="right" sx={{ pr: 3 }}>
                    <IconButton size="small" sx={{ color: 'text.secondary' }}>
                      <VisibilityOutlinedIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
