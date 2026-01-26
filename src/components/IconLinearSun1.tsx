import React from 'react';

export interface IconLinearSun1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearSun1: React.FC<IconLinearSun1Props> = ({
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
      <g clip-path="url(#a)"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 1v2m0 18v2m11-11h-2M3 12H1m18.778-7.778-1.414 1.414M5.636 18.364l-1.414 1.414m15.556 0-1.414-1.414M5.636 5.636 4.222 4.222M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
};
