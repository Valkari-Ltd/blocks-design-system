import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './pages/Home';
import ButtonsDemo from './pages/ButtonsDemo';
import TypographyDemo from './pages/TypographyDemo';
import ThemeDemo from './pages/ThemeDemo';
import FormDemo from './pages/FormDemo';
import { ColorModeProvider, useColorMode } from './ColorModeContext';
import { ThemeProvider } from 'blocks-design-system';
import { ThemeCSSVariables } from './ThemeCSSVariables';

import { useTheme } from 'blocks-design-system';
import IconsDemo from './pages/IconsDemo';

function AppWithTheme() {
  const { mode } = useColorMode();
  return (
    <ThemeProvider mode={mode}>
      <ThemeCSSVariables />
      <MainBackground>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<ButtonsDemo />} />
          <Route path="/typography" element={<TypographyDemo />} />
          <Route path="/theme" element={<ThemeDemo />} />
          <Route path="/icons" element={<IconsDemo />} />
          <Route path="/form" element={<FormDemo />} />
        </Routes>
      </MainBackground>
    </ThemeProvider>
  );
}

function MainBackground({ children }: { children: React.ReactNode }) {
  // Use theme to get background color
  useTheme(); // ensures re-render on theme change
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', transition: 'background 0.2s' }}>
      {children}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <BrowserRouter>
        <AppWithTheme />
      </BrowserRouter>
    </ColorModeProvider>
  </React.StrictMode>
);