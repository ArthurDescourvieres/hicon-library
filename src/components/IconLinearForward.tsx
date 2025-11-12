import React from 'react';

export interface IconLinearForwardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearForward: React.FC<IconLinearForwardProps> = ({
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
      <path stroke="#414141" stroke-width="1.5" d="M7.947 7.919c2.28 1.34 3.42 2.009 3.803 2.883a3 3 0 0 1 0 2.396c-.383.874-1.523 1.544-3.803 2.883-2.28 1.34-3.42 2.01-4.355 1.91a2.9 2.9 0 0 1-2.04-1.199C1 16.018 1 14.68 1 12s0-4.018.553-4.792a2.9 2.9 0 0 1 2.04-1.198c.935-.1 2.075.57 4.354 1.909Z"/><path stroke="#414141" stroke-width="1.5" d="M18.947 7.919c2.28 1.34 3.42 2.009 3.803 2.883a3 3 0 0 1 0 2.396c-.383.874-1.523 1.544-3.803 2.883-2.28 1.34-3.42 2.01-4.355 1.91a2.9 2.9 0 0 1-2.04-1.199C12 16.018 12 14.68 12 12s0-4.018.553-4.792a2.9 2.9 0 0 1 2.04-1.198c.935-.1 2.075.57 4.354 1.909Z"/>
    </svg>
  );
};
