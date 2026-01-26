import React from 'react';

export interface IconLinearPauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearPause: React.FC<IconLinearPauseProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 21V3m6 18V3"/>
    </svg>
  );
};
