import Home from './components/Home';
import React, { useState } from 'react';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      {isAuthenticated ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
export default App;
