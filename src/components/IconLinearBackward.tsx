import React from 'react';

export interface IconLinearBackwardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearBackward: React.FC<IconLinearBackwardProps> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M16.053 16.081c-2.28-1.34-3.42-2.009-3.803-2.883a3 3 0 0 1 0-2.396c.383-.874 1.523-1.544 3.803-2.883 2.28-1.34 3.42-2.01 4.355-1.91a2.9 2.9 0 0 1 2.04 1.199C23 7.982 23 9.32 23 12s0 4.018-.553 4.792a2.9 2.9 0 0 1-2.04 1.198c-.935.1-2.075-.57-4.354-1.909Z"/><path stroke="currentColor" stroke-width="1.5" d="M5.053 16.081c-2.28-1.34-3.42-2.009-3.803-2.883a3 3 0 0 1 0-2.396c.383-.874 1.523-1.544 3.803-2.883 2.28-1.34 3.42-2.01 4.355-1.91a2.9 2.9 0 0 1 2.04 1.199C12 7.982 12 9.32 12 12s0 4.018-.553 4.792a2.9 2.9 0 0 1-2.04 1.198c-.935.1-2.075-.57-4.354-1.909Z"/>
    </svg>
  );
};
