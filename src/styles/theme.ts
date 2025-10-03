
export const colors = {
  background: '#09090B',
  card: '#1D1D22',
  border: '#27272A',
  input: '#09090B',
  primary: {
    DEFAULT: '#07AC73',
    foreground: '#fff',
  },
  accent: {
    DEFAULT: '#056C48',
    foreground: '#fff',
  },
  muted: {
    DEFAULT: '#A1A1A9',
    foreground: '#fff',
  },
  white: '#fff',
  gray: {
    900: '#09090B',
    800: '#18181B',
    700: '#27272A',
    400: '#A1A1A9',
  },
};

// spacing left as-is, can be updated if you want to match Tailwind spacing scale
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
};

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '2rem',
};


// Theme color definitions
export const lightColors = {
  background: '#fff',
  backgroundForeground: '#18181B',
  card: '#f9f9fa',
  cardForeground: '#18181B',
  border: '#e5e5e9',
  input: '#fff',
  inputForeground: '#18181B',
  primary: {
    DEFAULT: '#07AC73',
    foreground: '#fff',
  },
  accent: {
    DEFAULT: '#056C48',
    foreground: '#fff',
  },
  muted: {
    DEFAULT: '#A1A1A9',
    foreground: '#18181B',
  },
  white: '#fff',
  gray: {
    900: '#09090B',
    800: '#18181B',
    700: '#27272A',
    400: '#A1A1A9',
  },
};

export const darkColors = {
  background: '#09090B',
  backgroundForeground: '#fff',
  card: '#1D1D22',
  cardForeground: '#fff',
  border: '#27272A',
  input: '#09090B',
  inputForeground: '#fff',
  primary: {
    DEFAULT: '#07AC73',
    foreground: '#fff',
  },
  accent: {
    DEFAULT: '#056C48',
    foreground: '#fff',
  },
  muted: {
    DEFAULT: '#A1A1A9',
    foreground: '#fff',
  },
  white: '#fff',
  gray: {
    900: '#09090B',
    800: '#18181B',
    700: '#27272A',
    400: '#A1A1A9',
  },
};


export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const fontFamily = {
  sans: ['Lato', 'ui-sans-serif', 'system-ui'],
};

export const borderRadius = {
  DEFAULT: '4px',
  lg: '8px',
  md: '6px',
  sm: '4px',
};

export const keyframes = {
  accordionDown: {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  accordionUp: {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' },
  },
};

export const animation = {
  accordionDown: 'accordion-down 0.2s ease-out',
  accordionUp: 'accordion-up 0.2s ease-out',
};

export const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export type Theme = {
  colors: typeof lightColors;
  spacing: typeof spacing;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  fontFamily: typeof fontFamily;
  borderRadius: typeof borderRadius;
  keyframes: typeof keyframes;
  animation: typeof animation;
  breakpoints: typeof breakpoints;
};


export const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  fontSizes,
  fontWeights,
  fontFamily,
  borderRadius,
  keyframes,
  animation,
  breakpoints,
};

export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  fontSizes,
  fontWeights,
  fontFamily,
  borderRadius,
  keyframes,
  animation,
  breakpoints,
};

export const defaultTheme = darkTheme;
