import React from 'react';

export interface IconLinearScan1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearScan1: React.FC<IconLinearScan1Props> = ({
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
      <path fill="#414141" d="M23 12.75a.75.75 0 0 0 0-1.5zm-22-1.5a.75.75 0 0 0 0 1.5zM3 16h-.75zm.75-1a.75.75 0 0 0-1.5 0zM9 21.75a.75.75 0 0 0 0-1.5zM8 21v-.75zM9 3.75a.75.75 0 0 0 0-1.5zM2.25 9a.75.75 0 0 0 1.5 0zM21 8h-.75zm-.75 1a.75.75 0 0 0 1.5 0zM15 2.25a.75.75 0 0 0 0 1.5zM16 3v-.75zm0 18v-.75zm-1-.75a.75.75 0 0 0 0 1.5zM21.75 15a.75.75 0 0 0-1.5 0zM21 16h.75zm2-4v-.75H1v1.5h22zM3 16h.75v-1h-1.5v1zm6 5v-.75H8v1.5h1zm-6-5h-.75A5.75 5.75 0 0 0 8 21.75v-1.5A4.25 4.25 0 0 1 3.75 16zM8 3v.75h1v-1.5H8zM3 9h.75V8h-1.5v1zm5-6v-.75A5.75 5.75 0 0 0 2.25 8h1.5A4.25 4.25 0 0 1 8 3.75zm13 5h-.75v1h1.5V8zm-6-5v.75h1v-1.5h-1zm6 5h.75A5.75 5.75 0 0 0 16 2.25v1.5A4.25 4.25 0 0 1 20.25 8zm-5 13v-.75h-1v1.5h1zm5-6h-.75v1h1.5v-1zm-5 6v.75A5.75 5.75 0 0 0 21.75 16h-1.5A4.25 4.25 0 0 1 16 20.25z"/>
    </svg>
  );
};
