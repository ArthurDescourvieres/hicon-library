import React from 'react';

export interface IconLinearProfileDelete2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearProfileDelete2: React.FC<IconLinearProfileDelete2Props> = ({
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
      <path fill="currentColor" d="M16.652 14.591a.75.75 0 0 0-1.061 1.06l.53-.53zm3.182 5.303a.75.75 0 1 0 1.06-1.06l-.53.53zm-4.243-1.06a.75.75 0 0 0 1.06 1.06l-.53-.53zm5.303-3.182a.75.75 0 1 0-1.06-1.061l.53.53zM14 13.75a.75.75 0 0 0 0-1.5zm0 8a.75.75 0 0 0 0-1.5zM15 6h-.75A3.25 3.25 0 0 1 11 9.25v1.5A4.75 4.75 0 0 0 15.75 6zm-4 4v-.75A3.25 3.25 0 0 1 7.75 6h-1.5A4.75 4.75 0 0 0 11 10.75zM7 6h.75A3.25 3.25 0 0 1 11 2.75v-1.5A4.75 4.75 0 0 0 6.25 6zm4-4v.75A3.25 3.25 0 0 1 14.25 6h1.5A4.75 4.75 0 0 0 11 1.25zm5.121 13.121-.53.53 4.243 4.243.53-.53.53-.53-4.242-4.243zm0 4.243.53.53 4.243-4.242-.53-.53-.53-.531-4.243 4.243zM8 13v.75h6v-1.5H8zm6 8v-.75H8v1.5h6zm-6 0v-.75A3.25 3.25 0 0 1 4.75 17h-1.5A4.75 4.75 0 0 0 8 21.75zm0-8v-.75A4.75 4.75 0 0 0 3.25 17h1.5A3.25 3.25 0 0 1 8 13.75z"/>
    </svg>
  );
};
