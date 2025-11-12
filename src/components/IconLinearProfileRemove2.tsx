import React from 'react';

export interface IconLinearProfileRemove2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearProfileRemove2: React.FC<IconLinearProfileRemove2Props> = ({
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
      <path fill="#414141" d="M15 16.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm-7-4a.75.75 0 0 0 0-1.5zm0 8a.75.75 0 0 0 0-1.5zM15 6h-.75A3.25 3.25 0 0 1 11 9.25v1.5A4.75 4.75 0 0 0 15.75 6zm-4 4v-.75A3.25 3.25 0 0 1 7.75 6h-1.5A4.75 4.75 0 0 0 11 10.75zM7 6h.75A3.25 3.25 0 0 1 11 2.75v-1.5A4.75 4.75 0 0 0 6.25 6zm4-4v.75A3.25 3.25 0 0 1 14.25 6h1.5A4.75 4.75 0 0 0 11 1.25zm4 15v.75h6v-1.5h-6zm-7-4v.75h6v-1.5H8zm6 8v-.75H8v1.5h6zm-6 0v-.75A3.25 3.25 0 0 1 4.75 17h-1.5A4.75 4.75 0 0 0 8 21.75zm0-8v-.75A4.75 4.75 0 0 0 3.25 17h1.5A3.25 3.25 0 0 1 8 13.75z"/>
    </svg>
  );
};
