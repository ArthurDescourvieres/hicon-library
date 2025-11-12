import React from 'react';

export interface IconLinearPlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearPlay: React.FC<IconLinearPlayProps> = ({
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
      <path stroke="#414141" stroke-width="1.5" d="M14.737 5.878c3.523 2.01 5.285 3.014 5.876 4.325a4.37 4.37 0 0 1 0 3.594c-.591 1.311-2.353 2.316-5.876 4.325s-5.285 3.013-6.73 2.863a4.5 4.5 0 0 1-3.153-1.797C4 18.027 4 16.018 4 12s0-6.027.854-7.188a4.5 4.5 0 0 1 3.152-1.797c1.446-.15 3.207.854 6.73 2.863Z"/>
    </svg>
  );
};
