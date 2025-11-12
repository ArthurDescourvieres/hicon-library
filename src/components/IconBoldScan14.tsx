import React from 'react';

export interface IconBoldScan14Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldScan14: React.FC<IconBoldScan14Props> = ({
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
      <path fill="#2D264B" d="M14.25 3a.75.75 0 0 1 .75-.75h1A5.75 5.75 0 0 1 21.75 8v1a.75.75 0 0 1-1.5 0V8A4.25 4.25 0 0 0 16 3.75h-1a.75.75 0 0 1-.75-.75m-12 5A5.75 5.75 0 0 1 8 2.25h1a.75.75 0 0 1 0 1.5H8A4.25 4.25 0 0 0 3.75 8v1a.75.75 0 0 1-1.5 0zm-2 4a.75.75 0 0 1 .75-.75h22a.75.75 0 0 1 0 1.5H1A.75.75 0 0 1 .25 12M3 14.25a.75.75 0 0 1 .75.75v1A4.25 4.25 0 0 0 8 20.25h1a.75.75 0 0 1 0 1.5H8A5.75 5.75 0 0 1 2.25 16v-1a.75.75 0 0 1 .75-.75m18 0a.75.75 0 0 1 .75.75v1A5.75 5.75 0 0 1 16 21.75h-1a.75.75 0 0 1 0-1.5h1A4.25 4.25 0 0 0 20.25 16v-1a.75.75 0 0 1 .75-.75m-14 .583A4.167 4.167 0 0 0 11.167 19h1.666A4.167 4.167 0 0 0 17 14.833a.833.833 0 0 0-.833-.833H7.833a.833.833 0 0 0-.833.833M11.167 5A4.167 4.167 0 0 0 7 9.167c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833A4.167 4.167 0 0 0 12.833 5z"/>
    </svg>
  );
};
