import React from 'react';

export interface IconBoldHeart1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldHeart1: React.FC<IconBoldHeart1Props> = ({
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
      <path fill="currentColor" d="M20.312 4.46c-2.335-2.38-5.038-1.376-6.711-.314-.946.6-2.256.6-3.202 0-1.673-1.062-4.376-2.066-6.71.315C-1.852 10.11 7.649 21 12 21c4.35 0 13.853-10.889 8.311-16.54"/>
    </svg>
  );
};
