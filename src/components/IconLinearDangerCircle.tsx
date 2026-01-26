import React from 'react';

export interface IconLinearDangerCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearDangerCircle: React.FC<IconLinearDangerCircleProps> = ({
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
      <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6m10-1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
