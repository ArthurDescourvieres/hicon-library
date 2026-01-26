import React from 'react';

export interface IconLinearMenuHamburgerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMenuHamburger: React.FC<IconLinearMenuHamburgerProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 18h14M5 6h14M5 12h14"/>
    </svg>
  );
};
