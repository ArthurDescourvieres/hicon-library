import React from 'react';

export interface IconLinearTextAlignJustifyRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTextAlignJustifyRight: React.FC<IconLinearTextAlignJustifyRightProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 14h14M5 18h14M13 6h6m-6 4h6"/>
    </svg>
  );
};
