import React from 'react';

export interface IconLinearScan11Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearScan11: React.FC<IconLinearScan11Props> = ({
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
      <path fill="#414141" d="M3 16h-.75zm.75-1a.75.75 0 0 0-1.5 0zM9 21.75a.75.75 0 0 0 0-1.5zM8 21v-.75zM9 3.75a.75.75 0 0 0 0-1.5zM2.25 9a.75.75 0 0 0 1.5 0zM21 8h-.75zm-.75 1a.75.75 0 0 0 1.5 0zM15 2.25a.75.75 0 0 0 0 1.5zM16 3v-.75zm0 18v-.75zm-1-.75a.75.75 0 0 0 0 1.5zM21.75 15a.75.75 0 0 0-1.5 0zM21 16h.75zm-9 0v-.75A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zm4-4h-.75A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zm-4-4v.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25zm0 0v-.75A4.75 4.75 0 0 0 7.25 12h1.5A3.25 3.25 0 0 1 12 8.75zm-9 8h.75v-1h-1.5v1zm6 5v-.75H8v1.5h1zm-6-5h-.75A5.75 5.75 0 0 0 8 21.75v-1.5A4.25 4.25 0 0 1 3.75 16zM8 3v.75h1v-1.5H8zM3 9h.75V8h-1.5v1zm5-6v-.75A5.75 5.75 0 0 0 2.25 8h1.5A4.25 4.25 0 0 1 8 3.75zm13 5h-.75v1h1.5V8zm-6-5v.75h1v-1.5h-1zm6 5h.75A5.75 5.75 0 0 0 16 2.25v1.5A4.25 4.25 0 0 1 20.25 8zm-5 13v-.75h-1v1.5h1zm5-6h-.75v1h1.5v-1zm-5 6v.75A5.75 5.75 0 0 0 21.75 16h-1.5A4.25 4.25 0 0 1 16 20.25z"/>
    </svg>
  );
};
