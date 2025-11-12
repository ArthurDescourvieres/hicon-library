import React from 'react';

export interface IconBoldMapProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMap: React.FC<IconBoldMapProps> = ({
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
      <path fill="#2D264B" d="M8.25 3.299a5.74 5.74 0 0 0-2.7 1.1l-2.2 1.65a2.75 2.75 0 0 0-1.1 2.2v8.63c0 2.213 2.526 3.476 4.297 2.148a4.1 4.1 0 0 1 1.703-.748zm1.5 14.98a4.1 4.1 0 0 1 1.703.748l.097.073a5.74 5.74 0 0 0 2.7 1.1V5.222a4.1 4.1 0 0 1-1.703-.749L12.45 4.4a5.74 5.74 0 0 0-2.7-1.101zm6-13.058v14.98a5.74 5.74 0 0 0 2.7-1.101l2.2-1.65a2.75 2.75 0 0 0 1.1-2.2V6.62c0-2.212-2.526-3.475-4.297-2.148-.515.387-1.1.637-1.703.749"/>
    </svg>
  );
};
