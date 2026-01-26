import React from 'react';

export interface IconLinearTextAlignLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTextAlignLeft: React.FC<IconLinearTextAlignLeftProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 14h14M5 18h6M5 6h14M5 10h6"/>
    </svg>
  );
};
