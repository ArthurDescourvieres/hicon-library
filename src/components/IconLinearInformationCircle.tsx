import React from 'react';

export interface IconLinearInformationCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearInformationCircle: React.FC<IconLinearInformationCircleProps> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 11v6m10-5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/><path fill="currentColor" d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
