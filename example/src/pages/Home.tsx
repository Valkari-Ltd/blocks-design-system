import { Typography } from 'blocks-design-system';
import { useTheme } from 'blocks-design-system';
import { useColorMode } from '../ColorModeContext';

export default function Home() {
  const theme = useTheme();
  const { mode } = useColorMode();
  console.log('[Home] Theme:', theme);
  console.log('[Home] Color mode:', mode);
  return (
    <div style={{ background: 'var(--background)', color: 'var(--background-foreground)', minHeight: '100vh', padding: 32, transition: 'background 0.2s, color 0.2s' }}>
      <Typography variant="h1">Blocks Design System Example</Typography>
      <Typography variant="p" style={{ marginTop: 16 }}>
        Welcome! Use the navigation to explore all components and theme values in the design system.
      </Typography>
    </div>
  );
}
