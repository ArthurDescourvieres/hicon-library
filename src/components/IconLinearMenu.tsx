import React from 'react';

export interface IconLinearMenuProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMenu: React.FC<IconLinearMenuProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M9 18h10M13 6h6M5 12h14"/>
    </svg>
  );
};
