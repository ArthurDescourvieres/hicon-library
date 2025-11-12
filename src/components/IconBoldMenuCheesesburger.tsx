import React from 'react';

export interface IconBoldMenuCheesesburgerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMenuCheesesburger: React.FC<IconBoldMenuCheesesburgerProps> = ({
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
      <path fill="#2D264B" d="M7 5.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
