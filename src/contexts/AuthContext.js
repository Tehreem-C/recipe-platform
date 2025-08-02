// frontend/src/contexts/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
// No Supabase import here, using localStorage for authentication

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial authentication check from localStorage
        const checkAuthStatus = async () => {
            await new Promise(resolve => setTimeout(resolve, 300)); // Simulate delay
            const token = localStorage.getItem('token');
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));

            if (token && currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        };

        checkAuthStatus();

        // No listener needed for localStorage, but keeping structure for consistency
        // return () => { /* cleanup if any */ };
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        try {
            // Call the simulated login from api/index.js
            const { data } = await import('../api').then(api => api.loginUser({ email, password }));
            setUser(data.user);
            return data;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const register = async (email, password, username) => {
        setLoading(true);
        try {
            // Call the simulated register from api/index.js
            const { data } = await import('../api').then(api => api.registerUser({ email, password, username }));
            setUser(data.user); // Auto-login after registration
            return data;
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setLoading(true);
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        // Clear user-specific data from localStorage if needed (e.g., recipes, favorites, health profile)
        // You'd need to iterate through keys like `userRecipes_userId`, `userFavorites_userId`, etc.
        // For simplicity, we'll just remove the auth tokens.
        setUser(null);
        setLoading(false);
    };

    const getCurrentUser = () => {
        return user;
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        getCurrentUser,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};