import React from 'react';

export interface IconLinearPokerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearPoker: React.FC<IconLinearPokerProps> = ({
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
      <path fill="#414141" d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M8 16h8m6-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
