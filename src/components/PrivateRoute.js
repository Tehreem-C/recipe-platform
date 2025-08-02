// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Show a loading indicator while authentication status is being determined
    return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>Checking authentication...</div>;
  }

  // If user is logged in, render the children (the protected component)
  // Otherwise, redirect to the login page
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;