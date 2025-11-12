import React from 'react';

export interface IconLinearRight2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearRight2: React.FC<IconLinearRight2Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m10 7 1.763 1.747c1.406 1.394 2.109 2.09 2.217 2.94a2.5 2.5 0 0 1 0 .626c-.108.85-.811 1.546-2.217 2.94L10 17"/>
    </svg>
  );
};
