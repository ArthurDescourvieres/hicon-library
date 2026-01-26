import React from 'react';

export interface IconLinearProfileAdd1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearProfileAdd1: React.FC<IconLinearProfileAdd1Props> = ({
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
      <path fill="currentColor" d="M16 10.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zM18.25 14a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zM13 6h-.75A3.25 3.25 0 0 1 9 9.25v1.5A4.75 4.75 0 0 0 13.75 6zm-4 4v-.75A3.25 3.25 0 0 1 5.75 6h-1.5A4.75 4.75 0 0 0 9 10.75zM5 6h.75A3.25 3.25 0 0 1 9 2.75v-1.5A4.75 4.75 0 0 0 4.25 6zm4-4v.75A3.25 3.25 0 0 1 12.25 6h1.5A4.75 4.75 0 0 0 9 1.25zM6 13v.75h6v-1.5H6zm6 8v-.75H6v1.5h6zm-6 0v-.75A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75zm10-4h-.75A3.25 3.25 0 0 1 12 20.25v1.5A4.75 4.75 0 0 0 16.75 17zm-4-4v.75A3.25 3.25 0 0 1 15.25 17h1.5A4.75 4.75 0 0 0 12 12.25zm-6 0v-.75A4.75 4.75 0 0 0 1.25 17h1.5A3.25 3.25 0 0 1 6 13.75zm10-2v.75h6v-1.5h-6zm3 3h.75v-3h-1.5v3zm0-3h.75V8h-1.5v3z"/>
    </svg>
  );
};
