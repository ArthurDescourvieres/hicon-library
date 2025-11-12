import React from 'react';

export interface IconLinearCloseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearClose: React.FC<IconLinearCloseProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m5 5 14 14M5 19l7-7 7-7"/>
    </svg>
  );
};
