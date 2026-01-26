import React from 'react';

export interface IconLinearTickCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTickCircle: React.FC<IconLinearTickCircleProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 9-3.37 3.763C12.297 14.254 11.629 15 10.75 15s-1.546-.746-2.88-2.237l-.87-.97M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
