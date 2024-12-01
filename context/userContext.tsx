// context/UserContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  userId: string | null;
  role: string | null;
  setUser: (userId: string, role: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const setUser = (userId: string, role: string) => {
    setUserId(userId);
    setRole(role);
  };

  return (
    <UserContext.Provider value={{ userId, role, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
