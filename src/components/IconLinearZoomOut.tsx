import React from 'react';

export interface IconLinearZoomOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearZoomOut: React.FC<IconLinearZoomOutProps> = ({
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
      <path fill="#414141" d="M8 9.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm5.53 6.72a.75.75 0 0 0-1.06 1.06L19 18zm2.94 5.06a.75.75 0 0 0 1.06-1.06L23 22zM8 10v.75h6v-1.5H8zm11 8-.53.53 4 4L23 22l.53-.53-4-4zm-8 1v-.75A8.25 8.25 0 0 1 2.75 10h-1.5A9.75 9.75 0 0 0 11 19.75zm9-9h-.75A8.25 8.25 0 0 1 11 18.25v1.5A9.75 9.75 0 0 0 20.75 10zm-9-9v.75A8.25 8.25 0 0 1 19.25 10h1.5A9.75 9.75 0 0 0 11 .25zm0 0V.25A9.75 9.75 0 0 0 1.25 10h1.5A8.25 8.25 0 0 1 11 1.75z"/>
    </svg>
  );
};
