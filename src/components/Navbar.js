// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">Recipe App</Link>
            <ul className="navbar-nav">
                <li><Link to="/">Home</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><Link to="/my-recipes">My Cookbook</Link></li>
                        <li><Link to="/add-recipe">Add Recipe</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                        <li><Link to="/health-profile">Health Profile</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button onClick={logout} className="navbar-button">Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
