import { Link, useLocation } from 'react-router-dom';
import { useColorMode } from './ColorModeContext';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/buttons', label: 'Buttons' },
  { path: '/typography', label: 'Typography' },
  { path: '/theme', label: 'Theme' },
  { path: '/icons', label: 'Icons' },
  { path: '/form', label: 'Form Demo' },
];

export default function Navigation() {
  const location = useLocation();
  const { mode, toggleMode } = useColorMode();
  const handleToggle = () => {
    console.log('[Navigation] Toggle button clicked. Current mode:', mode);
    toggleMode();
  };
  return (
    <nav
      style={{
        marginBottom: 32,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: '0.75rem 2rem',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
        transition: 'background 0.2s, color 0.2s, border 0.2s',
      }}
    >
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          style={{
            textDecoration: location.pathname === path ? 'underline' : 'none',
            fontWeight: location.pathname === path ? 700 : 400,
            color: 'var(--card-foreground)',
            padding: '0.25rem 0.75rem',
            borderRadius: 4,
            transition: 'color 0.2s, background 0.2s',
            background: location.pathname === path ? 'var(--muted)' : 'transparent',
          }}
        >
          {label}
        </Link>
      ))}
      <button
        onClick={handleToggle}
        style={{
          marginLeft: 16,
          padding: '0.5rem 1rem',
          borderRadius: 4,
          border: '1px solid var(--border)',
          background: 'var(--primary)',
          color: mode === 'dark' ? 'var(--primary-foreground)' : 'var(--card-foreground)',
          cursor: 'pointer',
          fontWeight: 500,
          transition: 'background 0.2s, color 0.2s, border 0.2s',
          boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
        }}
        aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {mode === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}
