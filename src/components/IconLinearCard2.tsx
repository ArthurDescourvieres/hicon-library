import React from 'react';

export interface IconLinearCard2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearCard2: React.FC<IconLinearCard2Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 17h-4m-3 0H6m-3.989-7C2 10.577 2 11.236 2 12c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 20 7.2 20 10 20h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 16.2 22 14.8 22 12c0-.764 0-1.423-.011-2M2.011 10c.03-1.54.138-2.492.534-3.27A5 5 0 0 1 4.73 4.545C5.8 4 7.2 4 10 4h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.396.778.505 1.73.534 3.27M2.011 10H21.99"/>
    </svg>
  );
};
