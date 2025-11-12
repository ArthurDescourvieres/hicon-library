import React from 'react';

export interface IconLinearStar1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearStar1: React.FC<IconLinearStar1Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M14 7.886c.323.953 1.248 1.598 2.292 1.598M5.098 7.014a3.63 3.63 0 0 0 3.45-2.507c1.087-3.343 5.817-3.343 6.903 0a3.63 3.63 0 0 0 3.451 2.508c3.515 0 4.977 4.498 2.133 6.564a3.63 3.63 0 0 0-1.318 4.057c1.086 3.343-2.74 6.123-5.584 4.057a3.63 3.63 0 0 0-4.266 0c-2.844 2.066-6.67-.714-5.584-4.057a3.63 3.63 0 0 0-1.318-4.057C.12 11.513 1.583 7.015 5.098 7.015Z"/>
    </svg>
  );
};
