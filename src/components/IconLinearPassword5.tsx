import React from 'react';

export interface IconLinearPassword5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearPassword5: React.FC<IconLinearPassword5Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M11 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0h5.882c.072 0 .138.04.17.106a2 2 0 0 1 0 1.788L17 14m-3 0 .053-.106a2 2 0 0 0 0-1.788L14 12m8 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
