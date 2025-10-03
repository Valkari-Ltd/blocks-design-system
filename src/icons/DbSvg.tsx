import React from "react";


interface DbSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const DbSvg = ({ width = 24, height = 23, className = "", color = 'currentColor', ...props }: DbSvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M20.6306 11.5202C20.6306 13.0909 16.8459 14.3587 12.1151 14.3587C7.38426 14.3587 3.59961 13.0909 3.59961 11.5202M20.6306 4.89708C20.6306 6.46474 16.818 7.73558 12.1151 7.73558C7.41212 7.73558 3.59961 6.46474 3.59961 4.89708M20.6306 4.89708C20.6306 3.32943 16.818 2.05859 12.1151 2.05859C7.41212 2.05859 3.59961 3.32943 3.59961 4.89708M20.6306 4.89708V18.1434C20.6306 19.714 16.8459 20.9819 12.1151 20.9819C7.38426 20.9819 3.59961 19.714 3.59961 18.1434V4.89708"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DbSvg;