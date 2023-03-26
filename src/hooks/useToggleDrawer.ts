import { useState } from 'react';

interface UseToggleDrawerHook {
  isDrawerOpen: boolean;
  toggleDrawer: Function;
}

export function useToggleDrawer(): UseToggleDrawerHook {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return {
    isDrawerOpen,
    toggleDrawer,
  };
}
