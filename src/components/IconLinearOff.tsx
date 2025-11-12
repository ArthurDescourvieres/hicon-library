import React from 'react';

export interface IconLinearOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearOff: React.FC<IconLinearOffProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M18 4c2.39 1.827 4 4.759 4 8 0 5.523-4.477 10-10 10S2 17.523 2 12a9.98 9.98 0 0 1 4-8m6-2v7"/>
    </svg>
  );
};
