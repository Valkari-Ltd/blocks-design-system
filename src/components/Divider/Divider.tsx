import React from "react";
import { colors } from '../../styles/theme';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  color?: string;
  thickness?: string;
  margin?: string;
}

const Divider: React.FC<DividerProps> = ({ color = "#23232A", thickness = "1px", margin = "16px 0", className = "", ...props }) => (
  <hr
    className={className}
    style={{
      border: 'none',
      borderTop: `${thickness} solid ${color || colors.border}`,
      margin,
      width: '100%',
    }}
    {...props}
  />
);

export default Divider;
