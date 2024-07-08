import Home from './components/Home';
import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(prevState => !prevState); // Toggle the authentication state
  };

  const handleLogout = () => {
    setIsAuthenticated(prevState => !prevState); // Toggle the authentication state
  };


  return (
    <>
      {isAuthenticated ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login>
          <GoogleLogin
            onSuccess={handleLogin}
          />
        </Login>
      )}
    </>
  );
}
export default App;
