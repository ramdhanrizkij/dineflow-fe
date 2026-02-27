import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './auth/SignIn';
import Dashboard from './dashboard/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
