// src/pages/ProfilePage.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/ProfilePage.css'; // Ensure this CSS file exists

const ProfilePage = () => {
  const { user, logout } = useAuth();

  if (!user) {
    // This case should ideally be handled by PrivateRoute, but good for safety
    return <div className="main-content">Please log in to view your profile.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>User Profile</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more profile details here */}
        <button onClick={logout} className="button-secondary">Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;