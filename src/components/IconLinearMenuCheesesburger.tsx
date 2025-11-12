import React from 'react';

export interface IconLinearMenuCheesesburgerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMenuCheesesburger: React.FC<IconLinearMenuCheesesburgerProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M7 18h14M7 12h14M7 6h14"/><path fill="#414141" d="M5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
