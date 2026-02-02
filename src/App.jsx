import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import ServiceDetail from './pages/ServiceDetail';
import ProjectDetail from './pages/ProjectDetail';

// Admin Imports
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/admin/Login';
import Register from './pages/admin/Register';
import Dashboard from './pages/admin/Dashboard';
import ProjectManager from './pages/admin/ProjectManager';
import ProjectForm from './pages/admin/ProjectForm';
import InsightManager from './pages/admin/InsightManager';
import InsightForm from './pages/admin/InsightForm';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      <div className="app">
        {!isAdminRoute && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:projectId" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<InsightDetail />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

            <Route path="/admin/projects" element={<PrivateRoute><ProjectManager /></PrivateRoute>} />
            <Route path="/admin/projects/new" element={<PrivateRoute><ProjectForm /></PrivateRoute>} />
            <Route path="/admin/projects/edit/:id" element={<PrivateRoute><ProjectForm /></PrivateRoute>} />

            <Route path="/admin/insights" element={<PrivateRoute><InsightManager /></PrivateRoute>} />
            <Route path="/admin/insights/new" element={<PrivateRoute><InsightForm /></PrivateRoute>} />
            <Route path="/admin/insights/edit/:id" element={<PrivateRoute><InsightForm /></PrivateRoute>} />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </AuthProvider>
  )
}

export default App
