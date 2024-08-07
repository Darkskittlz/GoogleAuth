import React from 'react';
import { Route, Navigate } from 'react-router-dom';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Navigate to="/home" />
  );
};
export default PrivateRoute;
