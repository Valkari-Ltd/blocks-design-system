import { Typography, colors, spacing, fontSizes, fontWeights, borderRadius, breakpoints } from 'blocks-design-system';
import { useTheme } from 'blocks-design-system';
import { useColorMode } from '../ColorModeContext';

export default function ThemeDemo() {
  const theme = useTheme();
  const { mode } = useColorMode();
  console.log('[ThemeDemo] Theme:', theme);
  console.log('[ThemeDemo] Color mode:', mode);
  return (
    <div style={{ background: 'var(--background)', color: 'var(--background-foreground)', minHeight: '100vh', padding: 32, transition: 'background 0.2s, color 0.2s' }}>
      <Typography variant="h2">Theme: Colors</Typography>
      <ul style={{ background: 'var(--card)', borderRadius: 8, padding: 16 }}>
        {Object.entries(colors).map(([name, value]) => {
          if (typeof value === 'string') {
            return (
              <li key={name} style={{ color: value }}>
                {name}: {value}
              </li>
            );
          } else if (typeof value === 'object' && value !== null) {
            return (
              <li key={name}>
                {name}:
                <ul style={{ marginLeft: 16 }}>
                  {Object.entries(value).map(([k, v]) => (
                    <li key={k} style={{ color: typeof v === 'string' ? v : undefined }}>
                      {k}: {v}
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={name}>
                {name}: {String(value)}
              </li>
            );
          }
        })}
      </ul>
      <Typography variant="h2">Theme: Spacing</Typography>
      <ul>
        {Object.entries(spacing).map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
      </ul>
      <Typography variant="h2">Theme: Font Sizes</Typography>
      <ul>
        {Object.entries(fontSizes).map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
      </ul>
      <Typography variant="h2">Theme: Font Weights</Typography>
      <ul>
        {Object.entries(fontWeights).map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
      </ul>
      <Typography variant="h2">Theme: Border Radius</Typography>
      <ul>
        {Object.entries(borderRadius).map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
      </ul>
      <Typography variant="h2">Theme: Breakpoints</Typography>
      <ul>
        {Object.entries(breakpoints).map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
