import React from 'react';

export interface IconLinearUpCircle2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearUpCircle2: React.FC<IconLinearUpCircle2Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m7 14 1.747-1.763c1.394-1.406 2.09-2.109 2.94-2.217q.313-.04.626 0c.85.108 1.546.811 2.94 2.217L17 14m5-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
