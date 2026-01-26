import React from 'react';

export interface IconLinearMenuStrawberryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMenuStrawberry: React.FC<IconLinearMenuStrawberryProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 18h4M5 6h14M8 12h8"/>
    </svg>
  );
};
