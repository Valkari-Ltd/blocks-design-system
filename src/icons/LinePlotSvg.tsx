import React from "react";


interface LinePlotSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const LinePlotSvg: React.FC<LinePlotSvgProps> = ({ color = 'currentColor', ...props }) => (
  <svg
    width={props.width || 19}
    height={props.height || 16}
    viewBox="0 0 19 16"
    fill="none"
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
