import React from 'react';

export interface IconLinearDownCircle2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearDownCircle2: React.FC<IconLinearDownCircle2Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m17 10-1.747 1.763c-1.394 1.406-2.09 2.109-2.94 2.217a2.5 2.5 0 0 1-.626 0c-.85-.108-1.546-.811-2.94-2.217L7 10m15 2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
