import { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { token } = useSelector((state) => state.session);
  const rehydrated = useSelector((state) => state._persist?.rehydrated);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedIsAuthenticated = localStorage.getItem('isAuthenticated')
    return savedIsAuthenticated ? JSON.parse(savedIsAuthenticated) : false;
  });


  useEffect(() => {
    if (rehydrated) {
      // Dynamically set isAuthenticated based on the retrieved token
      const newIsAuthenticated = !!token;
      setIsAuthenticated(newIsAuthenticated);

      console.log("AuthProvider: Token confirmed final establishing")
    }
  }, [rehydrated, token]);


  //persisting isAuthenticated to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

