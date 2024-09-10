import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../components/AuthContext';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
  const { isRehydrated } = useSelector((state) => state._persist);
  const { isAuthenticated } = useContext(AuthContext);

  // Diagnostic console logging
  // console.log("ProtectedRoute: isRehydrated = ", isRehydrated);
  // console.log("ProtectedRoute: isAuthenticated = ", isAuthenticated);

  if (isAuthenticated) {
    return element;
  } else {
    console.log('Unauthorized access attempt to protected route');
    return <Navigate replace to="/" />;
  }
};

export default ProtectedRoute;

