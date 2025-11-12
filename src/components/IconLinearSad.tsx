import React from 'react';

export interface IconLinearSadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearSad: React.FC<IconLinearSadProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M7 17c.667-1.286 2.6-3 5-3s4.333 1.714 5 3m5-5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/><path fill="#414141" d="M10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
