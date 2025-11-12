import React from 'react';

export interface IconLinearMenuHotdogProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMenuHotdog: React.FC<IconLinearMenuHotdogProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M9 18h6M5 12h14M9 6h6"/>
    </svg>
  );
};
