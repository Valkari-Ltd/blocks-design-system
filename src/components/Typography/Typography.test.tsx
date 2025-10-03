import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders paragraph by default', () => {
    render(<Typography>Test text</Typography>);
    const element = screen.getByText('Test text');
    expect(element.tagName).toBe('P');
  });

  it('renders h1 variant', () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    const element = screen.getByText('Heading 1');
    expect(element.tagName).toBe('H1');
  });

  it('renders h2 variant', () => {
    render(<Typography variant="h2">Heading 2</Typography>);
    const element = screen.getByText('Heading 2');
    expect(element.tagName).toBe('H2');
  });

  it('applies custom color', () => {
    render(<Typography color="red">Red text</Typography>);
    const element = screen.getByText('Red text');
    expect(element.style.color).toBe('red');
  });

  it('applies bold weight', () => {
    render(<Typography weight="bold">Bold text</Typography>);
    const element = screen.getByText('Bold text');
    expect(element).toHaveStyle({ fontWeight: 700 });
  });

  it('applies center alignment', () => {
    render(<Typography align="center">Centered text</Typography>);
    const element = screen.getByText('Centered text');
    expect(element).toHaveStyle({ textAlign: 'center' });
  });

  it('applies custom styles', () => {
    render(<Typography style={{ marginTop: '20px' }}>Styled text</Typography>);
    const element = screen.getByText('Styled text');
    expect(element).toHaveStyle({ marginTop: '20px' });
  });

  it('applies custom className', () => {
    render(<Typography className="custom-class">Classed text</Typography>);
    const element = screen.getByText('Classed text');
    expect(element).toHaveClass('custom-class');
  });
});
