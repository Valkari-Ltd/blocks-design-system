import * as React from "react";


interface PlusSvgProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const PlusSvg: React.FC<PlusSvgProps> = ({
  width = 15,
  height = 15,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="6" y="2" width="3" height="11" rx="1.5" fill={color} />
    <rect x="2" y="6" width="11" height="3" rx="1.5" fill={color} />
  </svg>
);

export default PlusSvg;
