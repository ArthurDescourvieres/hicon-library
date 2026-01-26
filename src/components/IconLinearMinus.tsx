import React from 'react';

export interface IconLinearMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMinus: React.FC<IconLinearMinusProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 12h16"/>
    </svg>
  );
};
