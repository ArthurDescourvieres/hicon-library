import React from 'react';

export interface IconLinearLeftCircle2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearLeftCircle2: React.FC<IconLinearLeftCircle2Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14 17-1.763-1.747c-1.406-1.394-2.109-2.09-2.217-2.94a2.5 2.5 0 0 1 0-.626c.108-.85.811-1.546 2.217-2.94L14 7m8 5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
