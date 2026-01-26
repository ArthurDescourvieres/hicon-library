import React from 'react';

export interface IconBoldHeart3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldHeart3: React.FC<IconBoldHeart3Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M10.4 4.146C8.725 3.084 6.022 2.08 3.688 4.46-1.852 10.11 7.649 21 12 21s13.853-10.889 8.311-16.54c-2.334-2.38-5.037-1.376-6.71-.314-.946.6-2.256.6-3.202 0m6.344 1.153a.75.75 0 0 0-.533 1.402c.36.137.737.37 1.116.744.481.478.786 1.002.956 1.553a.75.75 0 0 0 1.434-.442 5.2 5.2 0 0 0-1.334-2.176 4.7 4.7 0 0 0-1.638-1.08" clip-rule="evenodd"/>
    </svg>
  );
};
