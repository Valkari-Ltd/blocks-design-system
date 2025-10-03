import React, { CSSProperties } from 'react';
import { colors, borderRadius, fontFamily } from '../../styles/theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Whether the button should take full width
   */
  fullWidth?: boolean;
}

const getVariantStyles = (variant: ButtonProps['variant']): CSSProperties => {
  switch (variant) {
    case 'secondary':
      return {
        backgroundColor: colors.accent.DEFAULT,
        color: colors.accent.foreground,
        border: `1px solid ${colors.accent.DEFAULT}`,
      };
    case 'success':
      return {
        backgroundColor: colors.primary.DEFAULT,
        color: colors.primary.foreground,
        border: `1px solid ${colors.primary.DEFAULT}`,
      };
    case 'danger':
      return {
        backgroundColor: colors.gray[900],
        color: colors.white,
        border: `1px solid ${colors.gray[900]}`,
      };
    case 'warning':
      return {
        backgroundColor: colors.muted.DEFAULT,
        color: colors.muted.foreground,
        border: `1px solid ${colors.muted.DEFAULT}`,
      };
    case 'info':
      return {
        backgroundColor: colors.card,
        color: colors.white,
        border: `1px solid ${colors.card}`,
      };
    case 'primary':
    default:
      return {
        backgroundColor: colors.primary.DEFAULT,
        color: colors.primary.foreground,
        border: `1px solid ${colors.primary.DEFAULT}`,
      };
  }
};

const getSizeStyles = (size: ButtonProps['size']): CSSProperties => {
  const sizeStyles: Record<string, CSSProperties> = {
    sm: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.875rem',
    },
    md: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
    },
    lg: {
      padding: '0.75rem 1.5rem',
      fontSize: '1.125rem',
    },
  };
  return sizeStyles[size || 'md'];
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  fullWidth = false,
  style,
  ...props
}) => {
  const baseStyles: CSSProperties = {
    fontFamily: fontFamily.sans.join(', '),
    fontWeight: 500,
    borderRadius: borderRadius.DEFAULT,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s ease-in-out',
    outline: 'none',
    width: fullWidth ? '100%' : 'auto',
    ...getSizeStyles(size),
    ...getVariantStyles(variant),
    ...style,
  };

  return (
    <button style={baseStyles} disabled={disabled} {...props}>
      {children}
    </button>
  );
};


Button.displayName = 'Button';
export default Button;
