import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Route element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default PrivateRoute;

