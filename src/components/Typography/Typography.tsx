import React, { CSSProperties } from 'react';

export interface TypographyProps {
  /**
   * The HTML tag to render
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  /**
   * Text content
   */
  children: React.ReactNode;
  /**
   * Text color
   */
  color?: string;
  /**
   * Font weight
   */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Additional CSS styles
   */
  style?: CSSProperties;
  /**
   * Additional CSS class name
   */
  className?: string;
}

const getVariantStyles = (variant: TypographyProps['variant']): CSSProperties => {
  const variantStyles: Record<string, CSSProperties> = {
    h1: { fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' },
    h2: { fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' },
    h3: { fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' },
    h4: { fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' },
    h5: { fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' },
    h6: { fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' },
    p: { fontSize: '1rem', fontWeight: 400, marginBottom: '1rem' },
    span: { fontSize: '1rem', fontWeight: 400 },
  };
  return variantStyles[variant || 'p'];
};

const getWeightValue = (weight: TypographyProps['weight']): number => {
  const weights: Record<string, number> = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  };
  return weights[weight || 'normal'];
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  children,
  color,
  weight,
  align = 'left',
  style,
  className,
}) => {
  const Component = variant as React.ElementType;

  const combinedStyles: CSSProperties = {
    margin: 0,
    ...getVariantStyles(variant),
    ...(color && { color }),
    ...(weight && { fontWeight: getWeightValue(weight) }),
    textAlign: align,
    ...style,
  };

  return (
    <Component style={combinedStyles} className={className}>
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';
