import { Button, Typography } from 'blocks-design-system';
import { useTheme } from 'blocks-design-system';
import { useColorMode } from '../ColorModeContext';

export default function ButtonsDemo() {
  const theme = useTheme();
  const { mode } = useColorMode();
  console.log('[ButtonsDemo] Theme:', theme);
  console.log('[ButtonsDemo] Color mode:', mode);
  return (
    <div style={{ background: 'var(--background)', color: 'var(--background-foreground)', minHeight: '100vh', padding: 32, transition: 'background 0.2s, color 0.2s' }}>
      <Typography variant="h2">Button Variants</Typography>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32, background: 'var(--card)', borderRadius: 8, padding: 16 }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button disabled>Disabled</Button>
      </div>
      <Typography variant="h2">Button Sizes</Typography>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32, background: 'var(--card)', borderRadius: 8, padding: 16 }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <Typography variant="h2">Full Width Button</Typography>
      <Button fullWidth>Full Width</Button>
    </div>
  );
}
