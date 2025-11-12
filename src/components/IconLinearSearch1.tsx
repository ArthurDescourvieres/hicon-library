import React from 'react';

export interface IconLinearSearch1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearSearch1: React.FC<IconLinearSearch1Props> = ({
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
      <path fill="#414141" d="M19.53 17.47a.75.75 0 0 0-1.06 1.06L19 18zm2.94 5.06a.75.75 0 0 0 1.06-1.06L23 22zM9.335 4.802A.75.75 0 1 0 9.1 3.321l.118.74zM4.321 8.101a.75.75 0 1 0 1.481.234l-.74-.117zM19 18l-.531.53 4 4L23 22l.53-.53-4-4zm-8 1v-.75A8.25 8.25 0 0 1 2.75 10h-1.5A9.75 9.75 0 0 0 11 19.75zm9-9h-.75A8.25 8.25 0 0 1 11 18.25v1.5A9.75 9.75 0 0 0 20.75 10zm-9-9v.75A8.25 8.25 0 0 1 19.25 10h1.5A9.75 9.75 0 0 0 11 .25zm0 0V.25A9.75 9.75 0 0 0 1.25 10h1.5A8.25 8.25 0 0 1 11 1.75zM9.218 4.062 9.1 3.32A5.75 5.75 0 0 0 4.32 8.1l.742.117.74.117a4.25 4.25 0 0 1 3.533-3.533z"/>
    </svg>
  );
};
