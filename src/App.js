// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import ModifyRecipePage from './pages/ModifyRecipePage';
import MyRecipesPage from './pages/MyRecipesPage'; // Correct import
import NotFoundPage from './pages/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage';
import HealthProfileForm from './components/HealthProfileForm';

import './styles/App.css';

const AppContent = () => {
    const { loading } = useAuth();

    if (loading) {
        return <div className="app-global-loading">Loading application...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="App-content-wrapper">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/recipes/:id" element={<RecipeDetailPage />} />

                    {/* Protected Routes - only accessible when logged in */}
                    <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                    <Route path="/add-recipe" element={<PrivateRoute><ModifyRecipePage /></PrivateRoute>} />
                    <Route path="/edit-recipe/:id" element={<PrivateRoute><ModifyRecipePage /></PrivateRoute>} />
                    <Route path="/my-recipes" element={<PrivateRoute><MyRecipesPage /></PrivateRoute>} />
                    <Route path="/favorites" element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
                    <Route path="/health-profile" element={<PrivateRoute><HealthProfileForm /></PrivateRoute>} />

                    {/* Fallback for unknown routes (404 Page) */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </>
    );
};

function App() {
    return (
        <Router>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </Router>
    );
}

export default App;
