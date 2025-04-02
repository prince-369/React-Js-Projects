import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import HomePage from './pages/public/HomePage.jsx';
import ProfileDetailsPage from './pages/public/ProfileDetailsPage.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminProfileForm from './pages/admin/AdminProfileForm.jsx';
import NotFoundPage from './pages/shared/NotFoundPage.jsx';
import ProtectedRoute from './components/common/ProtectedRoute.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:id" element={<ProfileDetailsPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}
          />
          <Route
            path="/admin/profiles/new"
            element={<ProtectedRoute><AdminProfileForm /></ProtectedRoute>}
          />
          <Route
            path="/admin/profiles/:id/edit"
            element={<ProtectedRoute><AdminProfileForm /></ProtectedRoute>}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;