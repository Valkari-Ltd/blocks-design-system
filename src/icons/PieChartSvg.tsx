import React from "react";


interface PieChartSvgProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const PieChartSvg: React.FC<PieChartSvgProps> = ({ color = 'currentColor', ...props }) => (
  <svg
    width={props.width || 20}
    height={props.height || 20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.4704 13.1569C16.9544 14.3772 16.1473 15.4525 15.1197 16.2888C14.0921 17.1251 12.8753 17.697 11.5756 17.9544C10.2759 18.2118 8.933 18.1469 7.6642 17.7654C6.3954 17.3839 5.23938 16.6974 4.29719 15.7659C3.355 14.8345 2.65534 13.6863 2.25938 12.422C1.86341 11.1576 1.7832 9.81553 2.02575 8.51301C2.2683 7.21049 2.82623 5.98721 3.65076 4.95013C4.47529 3.91305 5.54132 3.09374 6.75564 2.56383M18.1111 10.0017C18.1111 8.93654 17.9013 7.8818 17.4937 6.89772C17.0861 5.91364 16.4886 5.01949 15.7354 4.2663C14.9823 3.51312 14.0881 2.91566 13.104 2.50804C12.1199 2.10042 11.0652 1.89063 10 1.89062V10.0017H18.1111Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PieChartSvg;
