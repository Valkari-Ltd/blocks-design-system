import React, { CSSProperties } from 'react';

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
  const variantStyles: Record<string, CSSProperties> = {
    primary: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      border: '1px solid #007bff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#ffffff',
      border: '1px solid #6c757d',
    },
    success: {
      backgroundColor: '#28a745',
      color: '#ffffff',
      border: '1px solid #28a745',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: '#ffffff',
      border: '1px solid #dc3545',
    },
    warning: {
      backgroundColor: '#ffc107',
      color: '#000000',
      border: '1px solid #ffc107',
    },
    info: {
      backgroundColor: '#17a2b8',
      color: '#ffffff',
      border: '1px solid #17a2b8',
    },
  };
  return variantStyles[variant || 'primary'];
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
    fontFamily: 'inherit',
    fontWeight: 500,
    borderRadius: '0.25rem',
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
