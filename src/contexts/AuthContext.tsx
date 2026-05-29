import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  isSubscribed: boolean;
  subscriptionTier: 'free' | 'basic' | 'premium' | 'ultra';
  subscriptionStartDate?: string;
  subscriptionEndDate?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  subscribe: (tier: 'basic' | 'premium' | 'ultra') => void;
  unsubscribe: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('anime_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string) => {
    // Simulate fetching user with potential subscription from "backend"
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      isSubscribed: false,
      subscriptionTier: 'free',
    };
    setUser(mockUser);
    localStorage.setItem('anime_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('anime_user');
  };

  const subscribe = (tier: 'basic' | 'premium' | 'ultra') => {
    if (!user) return;
    
    const now = new Date();
    const endDate = new Date();
    endDate.setMonth(now.getMonth() + 1); // 1 month subscription

    const updatedUser: User = {
      ...user,
      isSubscribed: true,
      subscriptionTier: tier,
      subscriptionStartDate: now.toISOString(),
      subscriptionEndDate: endDate.toISOString(),
    };
    setUser(updatedUser);
    localStorage.setItem('anime_user', JSON.stringify(updatedUser));
  };

  const unsubscribe = () => {
    if (!user) return;
    const updatedUser: User = {
      ...user,
      isSubscribed: false,
      subscriptionTier: 'free',
      subscriptionStartDate: undefined,
      subscriptionEndDate: undefined,
    };
    setUser(updatedUser);
    localStorage.setItem('anime_user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, subscribe, unsubscribe, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};