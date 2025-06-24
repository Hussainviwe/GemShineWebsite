import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and set user
      authAPI.verifyToken()
        .then(userData => setUser(userData))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    // Demo credentials check
    if (email === 'admin@gemshine.com' && password === 'admin123') {
      // Mock successful login
      const mockResponse = {
        token: 'demo-token-' + Date.now(),
        user: {
          id: 1,
          email: 'admin@gemshine.com',
          name: 'Admin User',
          role: 'admin'
        }
      };
      
      localStorage.setItem('token', mockResponse.token);
      setUser(mockResponse.user);
      return mockResponse;
    }
    
    // If not demo credentials, try API
    try {
      const response = await authAPI.login(email, password);
      localStorage.setItem('token', response.token);
      setUser(response.user);
      return response;
    } catch (error) {
      // If API fails and it's demo credentials, still allow login
      if (email === 'admin@gemshine.com' && password === 'admin123') {
        const mockResponse = {
          token: 'demo-token-' + Date.now(),
          user: {
            id: 1,
            email: 'admin@gemshine.com',
            name: 'Admin User',
            role: 'admin'
          }
        };
        
        localStorage.setItem('token', mockResponse.token);
        setUser(mockResponse.user);
        return mockResponse;
      }
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};