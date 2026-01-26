import React from 'react';

export interface IconLinearHeart3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearHeart3: React.FC<IconLinearHeart3Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 8.777a4.45 4.45 0 0 0-1.145-1.864A3.95 3.95 0 0 0 16.478 6m-6.079-1.854C8.726 3.084 6.023 2.08 3.69 4.46-1.852 10.11 7.649 21 12 21c4.35 0 13.853-10.889 8.311-16.54-2.334-2.38-5.037-1.376-6.71-.314-.946.6-2.256.6-3.202 0Z"/>
    </svg>
  );
};
