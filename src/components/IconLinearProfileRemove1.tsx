import React from 'react';

export interface IconLinearProfileRemove1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearProfileRemove1: React.FC<IconLinearProfileRemove1Props> = ({
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
      <path fill="#414141" d="M16 11.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zM13 7h-.75A3.25 3.25 0 0 1 9 10.25v1.5A4.75 4.75 0 0 0 13.75 7zm-4 4v-.75A3.25 3.25 0 0 1 5.75 7h-1.5A4.75 4.75 0 0 0 9 11.75zM5 7h.75A3.25 3.25 0 0 1 9 3.75v-1.5A4.75 4.75 0 0 0 4.25 7zm4-4v.75A3.25 3.25 0 0 1 12.25 7h1.5A4.75 4.75 0 0 0 9 2.25zM6 14v.75h6v-1.5H6zm6 8v-.75H6v1.5h6zm-6 0v-.75A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75zm10-4h-.75A3.25 3.25 0 0 1 12 21.25v1.5A4.75 4.75 0 0 0 16.75 18zm-4-4v.75A3.25 3.25 0 0 1 15.25 18h1.5A4.75 4.75 0 0 0 12 13.25zm-6 0v-.75A4.75 4.75 0 0 0 1.25 18h1.5A3.25 3.25 0 0 1 6 14.75zm10-2v.75h6v-1.5h-6z"/>
    </svg>
  );
};
