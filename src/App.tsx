import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Watch from './pages/Watch';
import Subscribe from './pages/Subscribe';
import Login from './pages/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              
              {/* Protected Route for Watching Anime */}
              <Route 
                path="/watch/:id" 
                element={
                  <ProtectedRoute requireSubscription>
                    <Watch />
                  </ProtectedRoute>
                } 
              />
              
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-center" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;