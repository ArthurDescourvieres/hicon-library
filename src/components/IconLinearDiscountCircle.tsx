import React from 'react';

export interface IconLinearDiscountCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearDiscountCircle: React.FC<IconLinearDiscountCircleProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 15 5.657-5.657M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/><path fill="currentColor" d="M8 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0m6 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
    </svg>
  );
};
