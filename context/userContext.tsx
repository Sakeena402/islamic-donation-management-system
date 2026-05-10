'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export interface UserContextType {
  userId: string | null;
  username: string | null;
  role: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  setUser: (userId: string, username: string, role: string) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user data on mount
  const refreshUser = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get('/api/auth/me');
      const { id, username: name, role: userRole } = response.data;
      setUserId(id);
      setUsername(name);
      setRole(userRole);
    } catch (err) {
      // Not authenticated or error fetching
      setUserId(null);
      setUsername(null);
      setRole(null);
      setError(null); // Don't show error for unauthenticated state
    } finally {
      setIsLoading(false);
    }
  }, []);

  const setUser = useCallback((userId: string, username: string, role: string) => {
    setUserId(userId);
    setUsername(username);
    setRole(role);
    setError(null);
  }, []);

  const logout = useCallback(() => {
    setUserId(null);
    setUsername(null);
    setRole(null);
    setError(null);
  }, []);

  // Auto-fetch user on mount
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const value: UserContextType = {
    userId,
    username,
    role,
    isLoading,
    error,
    isAuthenticated: !!userId,
    setUser,
    logout,
    refreshUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
