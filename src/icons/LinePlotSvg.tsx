import React from "react";


interface LinePlotSvgProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const LinePlotSvg: React.FC<LinePlotSvgProps> = ({
  width = 19,
  height = 16,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 16"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.6108 8.00114H14.3664L11.9331 15.3011L7.06642 0.701172L4.6331 8.00114H1.38867"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LinePlotSvg;
