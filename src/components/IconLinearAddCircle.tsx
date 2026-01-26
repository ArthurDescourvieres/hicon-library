import React from 'react';

export interface IconLinearAddCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearAddCircle: React.FC<IconLinearAddCircleProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 12h6m-3 3V9m10 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
