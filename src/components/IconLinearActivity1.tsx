import React from 'react';

export interface IconLinearActivity1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearActivity1: React.FC<IconLinearActivity1Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m7 14.857 1.46-2.977c.738-1.504 2.906-1.43 3.54.12s2.802 1.624 3.54.12L17 9.143M12 21c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 17.625 3 15.749 3 12s0-5.625.955-6.939A5 5 0 0 1 5.06 3.955C6.375 3 8.251 3 12 3s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 6.375 21 8.251 21 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 21 15.749 21 12 21Z"/>
    </svg>
  );
};
