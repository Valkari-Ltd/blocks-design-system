import React from "react";


interface CubeSvgProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const CubeSvg: React.FC<CubeSvgProps> = ({
  width = 19,
  height = 21,
  color = 'currentColor',
  className = '',
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 21"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.6306 10.5202L13.3728 12.9803V17.8909M4.85735 17.8909V12.9803L0.599609 10.5202M0.855092 5.75159L9.1151 10.5297L17.3751 5.75159M9.11508 20.0576V10.5202M4.85735 3.14964L9.11508 5.60967L13.3728 3.14964M17.6306 14.3049V6.73559C17.6302 6.40374 17.5426 6.07783 17.3765 5.79052C17.2105 5.50322 16.9718 5.26465 16.6844 5.09873L10.0612 1.31407C9.77358 1.14798 9.44726 1.06055 9.11508 1.06055C8.78291 1.06055 8.45659 1.14798 8.16892 1.31407L1.54577 5.09873C1.25839 5.26465 1.01969 5.50322 0.853618 5.79052C0.687548 6.07783 0.59995 6.40374 0.599609 6.73559V14.3049C0.59995 14.6367 0.687548 14.9627 0.853618 15.25C1.01969 15.5373 1.25839 15.7758 1.54577 15.9418L8.16892 19.7264C8.45659 19.8925 8.78291 19.9799 9.11508 19.9799C9.44726 19.9799 9.77358 19.8925 10.0612 19.7264L16.6844 15.9418C16.9718 15.7758 17.2105 15.5373 17.3765 15.25C17.5426 14.9627 17.6302 14.6367 17.6306 14.3049Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CubeSvg;
