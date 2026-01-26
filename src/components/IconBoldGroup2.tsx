import React from 'react';

export interface IconBoldGroup2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldGroup2: React.FC<IconBoldGroup2Props> = ({
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
      <path fill="currentColor" d="M6 7.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"/><path fill="currentColor" d="M13.1 4.382a4.74 4.74 0 0 1 1.4 3.368 4.74 4.74 0 0 1-1.4 3.368 3.75 3.75 0 1 0 0-6.736M3 16.75A3.75 3.75 0 0 1 6.75 13h6a3.75 3.75 0 1 1 0 7.5h-6A3.75 3.75 0 0 1 3 16.75"/><path fill="currentColor" d="M17.5 16.75a4.73 4.73 0 0 1-.877 2.75h1.127a3.75 3.75 0 1 0 0-7.5h-5a4.75 4.75 0 0 1 4.75 4.75"/>
    </svg>
  );
};
