import React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 24, color = "#A1A1A9", className = "", ...props }) => (
  <div className={className} {...props} style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ animation: 'bsds-spin 1s linear infinite' }}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="31.4 31.4"
        fill="none"
      />
    </svg>
    <style>{`@keyframes bsds-spin { 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

export default Spinner;
