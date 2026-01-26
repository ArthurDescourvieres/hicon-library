import React from 'react';

export interface IconLinearFilter3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearFilter3: React.FC<IconLinearFilter3Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M3 6.472A3.47 3.47 0 0 1 6.472 3h11.112a3.416 3.416 0 0 1 2.207 6.023l-3.52 2.98a5 5 0 0 0-1.771 3.816v1.78a2.75 2.75 0 0 1-1.133 2.225l-1.94 1.411C10.416 21.97 9 21.25 9 20v-4.3a5 5 0 0 0-1.621-3.686L4.126 9.032A3.47 3.47 0 0 1 3 6.472Z"/>
    </svg>
  );
};
