import React from 'react';

export interface IconLinearWatch1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearWatch1: React.FC<IconLinearWatch1Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 8v3.5a1.5 1.5 0 0 0 1.5 1.5H14m7 1v-4m-4.118-5.086A5 5 0 0 0 12 1h-2a5 5 0 0 0-4.882 3.914m11.764 0a5 5 0 0 0-.612-.369C15.2 4 13.8 4 11 4s-4.2 0-5.27.545a5 5 0 0 0-.612.369m11.764 0a5 5 0 0 1 1.573 1.816C19 7.8 19 9.2 19 12s0 4.2-.545 5.27a5 5 0 0 1-1.573 1.816M5.118 4.914A5 5 0 0 0 3.545 6.73C3 7.8 3 9.2 3 12s0 4.2.545 5.27a5 5 0 0 0 1.573 1.816m0 0A5 5 0 0 0 10 23h2a5 5 0 0 0 4.881-3.914m-11.763 0q.292.206.612.369C6.8 20 8.2 20 11 20s4.2 0 5.27-.545q.32-.163.611-.369"/>
    </svg>
  );
};
