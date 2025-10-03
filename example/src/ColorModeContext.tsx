import React, { createContext, useContext, useEffect, useState } from 'react';

export type ColorMode = 'light' | 'dark';

interface ColorModeContextProps {
  mode: ColorMode;
  toggleMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextProps | undefined>(undefined);

export const useColorMode = () => {
  const ctx = useContext(ColorModeContext);
  if (!ctx) throw new Error('useColorMode must be used within ColorModeProvider');
  return ctx;
};

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>(() => {
    if (typeof window !== 'undefined') {
      const initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      console.log('[ColorModeContext] Initial color mode:', initial);
      return initial;
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
    console.log('[ColorModeContext] Color mode changed:', mode);
    // Remove direct body background override to allow theme CSS variable to control background
    // document.body.style.background = mode === 'dark' ? '#09090B' : '#fff';
  }, [mode]);

  const toggleMode = () => {
    setMode((m) => {
      const next = m === 'dark' ? 'light' : 'dark';
      console.log('[ColorModeContext] Toggling color mode:', m, '->', next);
      return next;
    });
  };

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
