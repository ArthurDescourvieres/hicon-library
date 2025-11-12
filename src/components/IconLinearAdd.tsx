import React from 'react';

export interface IconLinearAddProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearAdd: React.FC<IconLinearAddProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M4 12h16m-8 8V4"/>
    </svg>
  );
};
