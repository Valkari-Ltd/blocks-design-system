/*
  Add this file to your example app to inject CSS variables for theme colors.
  This will allow you to use theme values in your example app via CSS custom properties.
*/
import { useEffect } from 'react';
import { useTheme } from 'blocks-design-system';

export function ThemeCSSVariables() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const colors = theme.colors;
    console.log('[ThemeCSSVariables] Applying theme:', theme);
    Object.entries(colors).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--${key}`, value);
        console.log(`[ThemeCSSVariables] Set --${key}:`, value);
      } else if (typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--${key}-${subKey}`, subValue as string);
          console.log(`[ThemeCSSVariables] Set --${key}-${subKey}:`, subValue);
        });
      }
    });
    root.style.setProperty('--background-foreground', colors.backgroundForeground);
    root.style.setProperty('--card-foreground', colors.cardForeground);
    root.style.setProperty('--input-foreground', colors.inputForeground);
    console.log('[ThemeCSSVariables] Set --background-foreground:', colors.backgroundForeground);
    console.log('[ThemeCSSVariables] Set --card-foreground:', colors.cardForeground);
    console.log('[ThemeCSSVariables] Set --input-foreground:', colors.inputForeground);
  }, [theme]);

  return null;
}
