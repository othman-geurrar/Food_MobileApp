// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { account } from '../lib/appwrite';
import { useRouter } from 'expo-router';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession(email, password);
      const loggedInUser = await account.get();
      setUser(loggedInUser);
      router.replace('/home');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show an alert)
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
      router.replace('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const checkUserLoggedIn = async () => {
    try {
      const loggedInUser = await account.get();
      setUser(loggedInUser);
      router.replace('/home');
    } catch (_error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    login,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};