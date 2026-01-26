import React from 'react';

export interface IconLinearZoomInProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearZoomIn: React.FC<IconLinearZoomInProps> = ({
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
      <path fill="currentColor" d="M19.359 18.298a.75.75 0 0 0-1.06 1.06l.53-.53zm2.939 5.06a.75.75 0 0 0 1.06-1.06l-.53.53zM8 10.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zM10.25 14a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zm7.078 10.829-.53.53 4 4 .53-.53.53-.53-4-4zM8 11v.75h6v-1.5H8zm3 3h.75V8h-1.5v6zm0 6v-.75A8.25 8.25 0 0 1 2.75 11h-1.5A9.75 9.75 0 0 0 11 20.75zm9-9h-.75A8.25 8.25 0 0 1 11 19.25v1.5A9.75 9.75 0 0 0 20.75 11zm-9-9v.75A8.25 8.25 0 0 1 19.25 11h1.5A9.75 9.75 0 0 0 11 1.25zm0 0v-.75A9.75 9.75 0 0 0 1.25 11h1.5A8.25 8.25 0 0 1 11 2.75z"/>
    </svg>
  );
};
