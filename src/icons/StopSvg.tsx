import React from "react";


interface StopSvgProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

const StopSvg = ({ className = "", width = 16, height = 16, color = 'currentColor', ...props }: StopSvgProps) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect x="4" y="4" width="8" height="8" rx="1" fill={color} />
    </svg>
);

export default StopSvg;
