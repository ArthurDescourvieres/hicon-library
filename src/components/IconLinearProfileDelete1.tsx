import React from 'react';

export interface IconLinearProfileDelete1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearProfileDelete1: React.FC<IconLinearProfileDelete1Props> = ({
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
      <path fill="#414141" d="M17.652 8.591a.75.75 0 0 0-1.061 1.06l.53-.53zm3.182 5.303a.75.75 0 1 0 1.06-1.06l-.53.53zm-4.243-1.06a.75.75 0 0 0 1.06 1.06l-.53-.53zm5.303-3.182a.75.75 0 0 0-1.06-1.061l.53.53zM13 6h-.75A3.25 3.25 0 0 1 9 9.25v1.5A4.75 4.75 0 0 0 13.75 6zm-4 4v-.75A3.25 3.25 0 0 1 5.75 6h-1.5A4.75 4.75 0 0 0 9 10.75zM5 6h.75A3.25 3.25 0 0 1 9 2.75v-1.5A4.75 4.75 0 0 0 4.25 6zm4-4v.75A3.25 3.25 0 0 1 12.25 6h1.5A4.75 4.75 0 0 0 9 1.25zM6 13v.75h6v-1.5H6zm6 8v-.75H6v1.5h6zm-6 0v-.75A3.25 3.25 0 0 1 2.75 17h-1.5A4.75 4.75 0 0 0 6 21.75zm10-4h-.75A3.25 3.25 0 0 1 12 20.25v1.5A4.75 4.75 0 0 0 16.75 17zm-4-4v.75A3.25 3.25 0 0 1 15.25 17h1.5A4.75 4.75 0 0 0 12 12.25zm-6 0v-.75A4.75 4.75 0 0 0 1.25 17h1.5A3.25 3.25 0 0 1 6 13.75zm11.121-3.879-.53.53 4.243 4.243.53-.53.53-.53-4.242-4.243zm0 4.243.53.53 4.243-4.242-.53-.53-.53-.531-4.243 4.243z"/>
    </svg>
  );
};
