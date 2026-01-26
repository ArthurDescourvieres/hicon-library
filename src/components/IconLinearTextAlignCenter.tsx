import React from 'react';

export interface IconLinearTextAlignCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTextAlignCenter: React.FC<IconLinearTextAlignCenterProps> = ({
  size = '1em',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 14h14M9 18h6M5 6h14M9 10h6"/>
    </svg>
  );
};
