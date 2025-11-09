'use client';

import { useAppContext } from '@/context/AppProvider';
import HeroNav from './HeroNav';
import Navbar from './navbar';

export default function NavSwitcher() {
  const { currentUser, loading } = useAppContext();

  // Show loading state or default navbar while loading
  if (loading) {
    return <Navbar />; // Or a loading skeleton if preferred
  }

  // Switch navbar based on user authentication
  return currentUser ? <HeroNav /> : <Navbar />;
}
