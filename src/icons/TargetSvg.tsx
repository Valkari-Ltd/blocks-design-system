import React from "react";


interface TargetSvgProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const TargetSvg: React.FC<TargetSvgProps> = ({
  width = 20,
  height = 20,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.99974 18.1108C14.4794 18.1108 18.1108 14.4794 18.1108 9.99974C18.1108 5.52012 14.4794 1.88867 9.99974 1.88867C5.52012 1.88867 1.88867 5.52012 1.88867 9.99974C1.88867 14.4794 5.52012 18.1108 9.99974 18.1108Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.99974 14.8664C12.6875 14.8664 14.8664 12.6875 14.8664 9.99974C14.8664 7.31197 12.6875 5.1331 9.99974 5.1331C7.31197 5.1331 5.1331 7.31197 5.1331 9.99974C5.1331 12.6875 7.31197 14.8664 9.99974 14.8664Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.99974 11.622C10.8957 11.622 11.622 10.8957 11.622 9.99974C11.622 9.10382 10.8957 8.37753 9.99974 8.37753C9.10382 8.37753 8.37753 9.10382 8.37753 9.99974C8.37753 10.8957 9.10382 11.622 9.99974 11.622Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default TargetSvg;
