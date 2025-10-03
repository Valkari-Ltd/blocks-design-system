import { Typography } from 'blocks-design-system';
import { useTheme } from 'blocks-design-system';
import { useColorMode } from '../ColorModeContext';

export default function TypographyDemo() {
  const theme = useTheme();
  const { mode } = useColorMode();
  console.log('[TypographyDemo] Theme:', theme);
  console.log('[TypographyDemo] Color mode:', mode);
  return (
    <div style={{ background: 'var(--background)', color: 'var(--background-foreground)', minHeight: '100vh', padding: 32, transition: 'background 0.2s, color 0.2s' }}>
      <Typography variant="h2">Typography Variants</Typography>
      <div style={{ background: 'var(--card)', borderRadius: 8, padding: 16, marginBottom: 32 }}>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="p">This is a paragraph of text using the Typography component.</Typography>
        <Typography variant="span">This is a span using Typography.</Typography>
      </div>
      <Typography variant="h2" style={{ marginTop: 32 }}>Custom Styles</Typography>
      <Typography variant="p" color="#007bff" weight="bold" align="center" style={{ fontSize: 24 }}>
        Custom colored, bold, centered, and large text.
      </Typography>
    </div>
  );
}
