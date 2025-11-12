import React from 'react';

export interface IconBoldGroup1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldGroup1: React.FC<IconBoldGroup1Props> = ({
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
      <path fill="#2D264B" d="M18.5 7.75a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0"/><path fill="#2D264B" d="M11.4 4.382A4.74 4.74 0 0 0 10 7.75a4.74 4.74 0 0 0 1.4 3.368 3.75 3.75 0 1 1 0-6.736M21.5 16.75A3.75 3.75 0 0 0 17.75 13h-6a3.75 3.75 0 1 0 0 7.5h6a3.75 3.75 0 0 0 3.75-3.75"/><path fill="#2D264B" d="M7 16.75c0 1.025.325 1.974.877 2.75H6.75a3.75 3.75 0 1 1 0-7.5h5A4.75 4.75 0 0 0 7 16.75"/>
    </svg>
  );
};
