import React from 'react';

export interface IconLinearFaqCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearFaqCircle: React.FC<IconLinearFaqCircleProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 9 .335-1.006c.704-2.11 3.489-2.563 4.823-.783a2.76 2.76 0 0 1-.13 3.472l-.92 1.05A4.48 4.48 0 0 0 12 14.683V15m10-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/><path fill="currentColor" d="M13 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
