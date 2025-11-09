'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/model/user.model'; // Assuming User type is exported from model
import axios from 'axios';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

interface AppContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  loading: boolean;
  refetchUser: () => void;
}

const AppContext = createContext<AppContextType>({
  currentUser: null,
  setCurrentUser: () => {},
  loading: false,
  refetchUser: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch user data function
  const fetchUser = async () => {
    try {
      setLoading(true);
      const token = Cookies.get('accessToken');
      // console.log("Fetching user with token before:", token);
      
      if (!token) {
        setCurrentUser(null);
        return;
      }
      // console.log("Fetching user with token:", token);
      const res = await axios.get('/api/user/me');
      // console.log("User fetch response:", res.data);
      if (res.data.success) {
        setCurrentUser(res.data.user);
      } else {
        toast.error('Failed to load user');
        setCurrentUser(null);
      }
    } catch (err: any) {
      console.error('Error fetching user:', err);
      // Don't show toast on 401/403 as it's expected for unauthenticated users
      if (err.response?.status !== 401 && err.response?.status !== 403) {
        toast.error('Failed to load user data');
      }
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch user data when the app mounts
  useEffect(() => {
    fetchUser();
  }, []);

  // Listen for cookie changes (login/logout events)
  useEffect(() => {
    const checkAuthChange = () => {
      const token = Cookies.get('accessToken');
      if (token && !currentUser) {
        // User logged in, fetch user data
        fetchUser();
      } else if (!token && currentUser) {
        // User logged out, clear user data
        setCurrentUser(null);
      }
    };

    // Check for auth changes every second
    const interval = setInterval(checkAuthChange, 1000);

    return () => clearInterval(interval);
  }, [currentUser]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading,
        refetchUser: fetchUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
