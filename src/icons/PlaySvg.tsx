import React from "react";


interface PlaySvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const PlaySvg = ({ className = "", width = 16, height = 16, color = 'currentColor', ...props }: PlaySvgProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polygon points="4,3 13,8 4,13" fill={color} />
  </svg>
);

export default PlaySvg;
