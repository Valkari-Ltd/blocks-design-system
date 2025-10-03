# blocks-design-system

The React Design System for all the superblocks suite of application frontends.

A comprehensive, type-safe React component library built with TypeScript, designed to provide consistent UI components across all Superblocks applications.

## Features

- 🎨 **Modern React Components** - Built with React and TypeScript
- 📦 **Tree-shakeable** - Import only what you need
- 🎯 **Type-safe** - Full TypeScript support with type definitions
- 🧪 **Well-tested** - Comprehensive test coverage with Jest and React Testing Library
- 📱 **Responsive** - Mobile-first design approach
- 🎭 **Customizable** - Easy to customize with inline styles or CSS

## Installation

```bash
npm install blocks-design-system
```

or with yarn:

```bash
yarn add blocks-design-system
```

## Usage

### Button Component

```tsx
import { Button } from 'blocks-design-system';

function App() {
  return (
    <div>
      <Button variant="primary" size="md" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
      
      <Button variant="secondary" size="lg" fullWidth>
        Full Width Button
      </Button>
      
      <Button variant="danger" size="sm" disabled>
        Disabled Button
      </Button>
    </div>
  );
}
```

#### Button Props

- `variant`: `'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'` - Button style variant (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` - Button size (default: `'md'`)
- `disabled`: `boolean` - Whether the button is disabled (default: `false`)
- `fullWidth`: `boolean` - Whether the button should take full width (default: `false`)
- All standard HTML button attributes are also supported

### Typography Component

```tsx
import { Typography } from 'blocks-design-system';

function App() {
  return (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2" color="blue">Heading 2 (Blue)</Typography>
      <Typography variant="p" weight="bold" align="center">
        Bold centered paragraph
      </Typography>
      <Typography variant="span" color="#ff0000">
        Custom colored span
      </Typography>
    </div>
  );
}
```

#### Typography Props

- `variant`: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'` - HTML tag to render (default: `'p'`)
- `color`: `string` - Text color (any valid CSS color)
- `weight`: `'light' | 'normal' | 'medium' | 'semibold' | 'bold'` - Font weight (default: `'normal'`)
- `align`: `'left' | 'center' | 'right' | 'justify'` - Text alignment (default: `'left'`)
- `style`: `CSSProperties` - Custom inline styles
- `className`: `string` - Custom CSS class name

### Theme Utilities

The design system also exports theme utilities for consistent styling:

```tsx
import { colors, spacing, fontSizes, fontWeights, borderRadius, breakpoints } from 'blocks-design-system';

// Use theme values in your components
const customStyle = {
  color: colors.primary,
  padding: spacing.md,
  fontSize: fontSizes.lg,
  fontWeight: fontWeights.bold,
  borderRadius: borderRadius.md,
};
```

## Development

### Prerequisites

- Node.js >= 18
- npm or yarn

### Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

4. Build the library:

```bash
npm run build
```

### Available Scripts

- `npm run build` - Build the library for production
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Lint the code
- `npm run lint:fix` - Lint and fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking

## Project Structure

```
blocks-design-system/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   └── Typography/
│   │       ├── Typography.tsx
│   │       ├── Typography.test.tsx
│   │       └── index.ts
│   ├── styles/
│   │   └── theme.ts
│   ├── index.ts
│   └── setupTests.ts
├── dist/                  # Build output (generated)
├── .eslintrc.js          # ESLint configuration
├── .prettierrc.json      # Prettier configuration
├── jest.config.js        # Jest configuration
├── rollup.config.js      # Rollup bundler configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Contributing

1. Create a new branch for your feature
2. Write tests for your changes
3. Ensure all tests pass with `npm test`
4. Ensure code is properly formatted with `npm run format`
5. Ensure no linting errors with `npm run lint`
6. Submit a pull request

## License

ISC
