import React from 'react';

export interface IconLinearHeart2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearHeart2: React.FC<IconLinearHeart2Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 8.777a4.45 4.45 0 0 1 1.145-1.864A3.95 3.95 0 0 1 7.522 6m6.079-1.854c1.673-1.062 4.376-2.066 6.71.315C25.853 10.11 16.351 21 12 21 7.65 21-1.852 10.111 3.689 4.46c2.334-2.38 5.037-1.376 6.71-.314.946.6 2.256.6 3.202 0Z"/>
    </svg>
  );
};
