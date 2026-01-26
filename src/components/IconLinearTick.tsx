import React from 'react';

export interface IconLinearTickProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTick: React.FC<IconLinearTickProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m20 7-5.39 6.469c-2.137 2.563-3.205 3.845-4.61 3.845s-2.473-1.282-4.61-3.845L4 11.8"/>
    </svg>
  );
};
