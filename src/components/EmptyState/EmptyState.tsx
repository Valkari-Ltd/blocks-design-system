
import React from "react";
import { colors, fontSizes, spacing } from '../../styles/theme';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  message: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, message, action, className = "", ...props }) => (
  <div
    className={className}
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: `${spacing.xl} 0`,
    }}
    {...props}
  >
    {icon && <div style={{ marginBottom: spacing.lg }}>{icon}</div>}
    <h3 style={{ fontSize: fontSizes.md, fontWeight: 400, color: colors.accent.DEFAULT, marginBottom: spacing.sm }}>{message}</h3>
    {action && <div style={{ marginTop: spacing.lg }}>{action}</div>}
  </div>
);

export default EmptyState;
