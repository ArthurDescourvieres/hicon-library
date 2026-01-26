import React from 'react';

export interface IconLinearCloseCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearCloseCircle: React.FC<IconLinearCloseCircleProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9.879 10.121 4.242 4.243m-4.242 0 4.242-4.243M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
