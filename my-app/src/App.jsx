import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Router>
      <nav style={{ backgroundColor: '#333', padding: '1rem', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link to="/dashboard" style={{ marginRight: '1rem', color: '#fff' }}>Dashboard</Link>
          {!isAuthenticated && <Link to="/login" style={{ marginRight: '1rem', color: '#fff' }}>Login</Link>}
          {!isAuthenticated && <Link to="/register" style={{ color: '#fff' }}>Register</Link>}
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} style={{ backgroundColor: '#e53e3e', padding: '0.5rem 1rem', borderRadius: '0.25rem', color: '#fff' }}>
            Logout
          </button>
        )}
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
