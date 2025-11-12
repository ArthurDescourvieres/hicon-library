import React from 'react';

export interface IconLinearWatch2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearWatch2: React.FC<IconLinearWatch2Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M19 12c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C15.2 20 13.8 20 11 20s-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C3 16.2 3 14.8 3 12s0-4.2.545-5.27A5 5 0 0 1 5.73 4.545C6.8 4 8.2 4 11 4s4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C19 7.8 19 9.2 19 12Zm0 0h2M11 8v3.5a1.5 1.5 0 0 0 1.5 1.5H14M7 2h8M7 22h8"/>
    </svg>
  );
};
