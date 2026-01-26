import React from 'react';

export interface IconLinearSun2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearSun2: React.FC<IconLinearSun2Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m19.778 3.222-1.414 1.414m-12.728 0L4.222 3.222M4 11H2M12 1v2m10 8h-2M4 14h16M7 11a5 5 0 0 1 10 0M7 18h10m-7 4h4"/>
    </svg>
  );
};
