import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { Theme, lightTheme, darkTheme } from '../styles/theme';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextProps {
  mode: ThemeMode;
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({
  mode: controlledMode,
  initialMode = 'dark',
  children,
}: {
  mode?: ThemeMode;
  initialMode?: ThemeMode;
  children: ReactNode;
}) => {
  const [uncontrolledMode, setUncontrolledMode] = useState<ThemeMode>(initialMode);
  const mode = controlledMode ?? uncontrolledMode;

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  const setMode = controlledMode ? () => {} : setUncontrolledMode;
  const toggleMode = controlledMode ? () => {} : () => setUncontrolledMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ mode, theme, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
