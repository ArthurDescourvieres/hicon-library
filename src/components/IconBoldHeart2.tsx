import React from 'react';

export interface IconBoldHeart2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldHeart2: React.FC<IconBoldHeart2Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M13.6 4.146c1.674-1.062 4.377-2.066 6.711.315C25.853 10.11 16.351 21 12 21 7.65 21-1.852 10.111 3.689 4.46c2.334-2.38 5.037-1.376 6.71-.314.946.6 2.256.6 3.202 0M7.79 6.7a.75.75 0 0 0-.534-1.4c-.57.217-1.123.57-1.639 1.081a5.2 5.2 0 0 0-1.334 2.176.75.75 0 0 0 1.434.442c.17-.551.475-1.075.956-1.553a3.2 3.2 0 0 1 1.116-.744" clip-rule="evenodd"/>
    </svg>
  );
};
