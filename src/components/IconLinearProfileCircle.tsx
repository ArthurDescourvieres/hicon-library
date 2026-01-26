import React from 'react';

export interface IconLinearProfileCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearProfileCircle: React.FC<IconLinearProfileCircleProps> = ({
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
      <path fill="currentColor" d="M16 9h-.75A3.25 3.25 0 0 1 12 12.25v1.5A4.75 4.75 0 0 0 16.75 9zm-4 4v-.75A3.25 3.25 0 0 1 8.75 9h-1.5A4.75 4.75 0 0 0 12 13.75zM8 9h.75A3.25 3.25 0 0 1 12 5.75v-1.5A4.75 4.75 0 0 0 7.25 9zm4-4v.75A3.25 3.25 0 0 1 15.25 9h1.5A4.75 4.75 0 0 0 12 4.25zM9 16v.75h6v-1.5H9zm-7-4h.75A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2v.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm10 10h-.75a9.22 9.22 0 0 1-2.846 6.675l.52.54.518.542A10.72 10.72 0 0 0 22.75 12zm-3.077 7.216-.52-.541A9.22 9.22 0 0 1 12 21.25v1.5c2.888 0 5.512-1.14 7.442-2.993zM15 16v.75a3.25 3.25 0 0 1 3.188 2.612l.735-.146.736-.146A4.75 4.75 0 0 0 15 15.25zm-3 6v-.75a9.22 9.22 0 0 1-6.404-2.575l-.52.54-.518.542A10.72 10.72 0 0 0 12 22.75zm-6.923-2.784.52-.541A9.22 9.22 0 0 1 2.75 12h-1.5c0 3.049 1.27 5.802 3.308 7.757zM9 16v-.75a4.75 4.75 0 0 0-4.659 3.82l.736.146.735.146A3.25 3.25 0 0 1 9 16.75z"/>
    </svg>
  );
};
