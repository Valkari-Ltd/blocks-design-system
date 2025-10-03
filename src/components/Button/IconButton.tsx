
import React from "react";
import { colors, fontSizes, spacing } from '../../styles/theme';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  "aria-label": string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger";
}


const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { width: 32, height: 32, fontSize: fontSizes.md, padding: 4 },
  md: { width: 40, height: 40, fontSize: fontSizes.lg, padding: 8 },
  lg: { width: 48, height: 48, fontSize: fontSizes.xl, padding: 12 },
};

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: colors.primary.DEFAULT,
    color: colors.primary.foreground,
    border: 'none',
  },
  secondary: {
    background: colors.gray[800],
    color: colors.white,
    border: `1px solid ${colors.border}`,
  },
  danger: {
    background: '#dc2626',
    color: colors.white,
    border: 'none',
  },
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { icon, "aria-label": ariaLabel, size = "md", variant = "secondary", className = "", ...props },
    ref
  ) => (
    <button
      ref={ref}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        border: 'none',
        ...sizeStyles[size],
        ...variantStyles[variant],
        cursor: 'pointer',
        transition: 'background 0.2s',
      }}
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  )
);

IconButton.displayName = "IconButton";

export default IconButton;
