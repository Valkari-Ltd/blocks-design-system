
import React from "react";
import { colors, fontSizes, spacing } from '../../styles/theme';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, actions, children, className = "", ...props }) => (
  <div
    className={className}
    style={{
      background: colors.background,
      border: `1px solid ${colors.border}`,
      borderRadius: 12,
      padding: `${spacing.xl} ${spacing.xl}`,
      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.08)',
    }}
    {...props}
  >
    {(title || actions) && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: spacing.lg }}>
        {title && <h2 style={{ fontSize: fontSizes.lg, fontWeight: 600, color: colors.white }}>{title}</h2>}
        {actions && <div>{actions}</div>}
      </div>
    )}
    {children}
  </div>
);

export default Card;
