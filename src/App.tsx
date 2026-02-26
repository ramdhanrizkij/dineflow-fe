import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import DashboardLayout from './layouts/DashboardLayout';
import ProductList from './pages/products/ProductList';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<PlaceholderPage title="Overview" />} />
            <Route path="/analytics" element={<PlaceholderPage title="Analytics" />} />
            <Route path="/e-commerce" element={<PlaceholderPage title="E-commerce" />} />
            <Route path="/crypto" element={<PlaceholderPage title="Crypto" />} />
            <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
            <Route path="/customers" element={<PlaceholderPage title="Customers" />} />
            <Route path="/customers/details" element={<PlaceholderPage title="Customer Details" />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/create" element={<PlaceholderPage title="Create Product" />} />
            <Route path="/products/details" element={<PlaceholderPage title="Product Details" />} />
            <Route path="/orders" element={<PlaceholderPage title="Orders" />} />
            <Route path="/invoices" element={<PlaceholderPage title="Invoices" />} />
            <Route path="/jobs" element={<PlaceholderPage title="Jobs" />} />
            <Route path="/logistics" element={<PlaceholderPage title="Logistics" />} />
            <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
