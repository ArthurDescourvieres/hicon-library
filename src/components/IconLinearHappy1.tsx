import React from 'react';

export interface IconLinearHappy1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearHappy1: React.FC<IconLinearHappy1Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 14c.667 1.286 2.6 3 5 3s4.333-1.714 5-3m5-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/><path fill="currentColor" d="M10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
