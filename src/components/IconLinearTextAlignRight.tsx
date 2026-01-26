import React from 'react';

export interface IconLinearTextAlignRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTextAlignRight: React.FC<IconLinearTextAlignRightProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 14h14m-6 4h6M5 6h14m-6 4h6"/>
    </svg>
  );
};
