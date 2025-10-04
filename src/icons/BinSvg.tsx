import React from "react";


interface BinSvgProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const BinSvg: React.FC<BinSvgProps> = ({
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
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.875 3.99935H3.125M3.125 3.99935H13.125M3.125 3.99935V12.166C3.125 12.4754 3.2567 12.7722 3.49112 12.991C3.72554 13.2098 4.04348 13.3327 4.375 13.3327H10.625C10.9565 13.3327 11.2745 13.2098 11.5089 12.991C11.7433 12.7722 11.875 12.4754 11.875 12.166V3.99935H3.125ZM5 3.99935V2.83268C5 2.52326 5.1317 2.22652 5.36612 2.00772C5.60054 1.78893 5.91848 1.66602 6.25 1.66602H8.75C9.08152 1.66602 9.39946 1.78893 9.63388 2.00772C9.8683 2.22652 10 2.52326 10 2.83268V3.99935"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BinSvg;
