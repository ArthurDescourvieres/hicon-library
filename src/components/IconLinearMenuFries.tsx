import React from 'react';

export interface IconLinearMenuFriesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMenuFries: React.FC<IconLinearMenuFriesProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 18h14M5 6h14M5 12h6"/>
    </svg>
  );
};
