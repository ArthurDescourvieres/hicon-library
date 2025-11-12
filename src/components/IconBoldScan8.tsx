import React from 'react';

export interface IconBoldScan8Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldScan8: React.FC<IconBoldScan8Props> = ({
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
      <path fill="#2D264B" d="M15 2.25a.75.75 0 0 0 0 1.5h1A4.25 4.25 0 0 1 20.25 8v1a.75.75 0 0 0 1.5 0V8A5.75 5.75 0 0 0 16 2.25zm-7 0A5.75 5.75 0 0 0 2.25 8v1a.75.75 0 0 0 1.5 0V8A4.25 4.25 0 0 1 8 3.75h1a.75.75 0 0 0 0-1.5zm4 7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M3.75 15a.75.75 0 0 0-1.5 0v1A5.75 5.75 0 0 0 8 21.75h1a.75.75 0 0 0 0-1.5H8A4.25 4.25 0 0 1 3.75 16zm18 0a.75.75 0 0 0-1.5 0v1A4.25 4.25 0 0 1 16 20.25h-1a.75.75 0 0 0 0 1.5h1A5.75 5.75 0 0 0 21.75 16z"/>
    </svg>
  );
};
