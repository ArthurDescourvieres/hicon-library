import React from 'react';

export interface IconBoldScan4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldScan4: React.FC<IconBoldScan4Props> = ({
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
      <path fill="#2D264B" d="M14.25 3a.75.75 0 0 1 .75-.75h1A5.75 5.75 0 0 1 21.75 8v1a.75.75 0 0 1-1.5 0V8A4.25 4.25 0 0 0 16 3.75h-1a.75.75 0 0 1-.75-.75m-12 5A5.75 5.75 0 0 1 8 2.25h1a.75.75 0 0 1 0 1.5H8A4.25 4.25 0 0 0 3.75 8v1a.75.75 0 0 1-1.5 0z"/><path fill="#2D264B" d="M5.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m9 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m-1 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M3 14.25a.75.75 0 0 1 .75.75v1A4.25 4.25 0 0 0 8 20.25h1a.75.75 0 0 1 0 1.5H8A5.75 5.75 0 0 1 2.25 16v-1a.75.75 0 0 1 .75-.75"/><path fill="#2D264B" d="M21 14.25a.75.75 0 0 1 .75.75v1A5.75 5.75 0 0 1 16 21.75h-1a.75.75 0 0 1 0-1.5h1A4.25 4.25 0 0 0 20.25 16v-1a.75.75 0 0 1 .75-.75"/>
    </svg>
  );
};
