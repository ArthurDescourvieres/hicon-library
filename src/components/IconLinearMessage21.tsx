import React from 'react';

export interface IconLinearMessage21Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMessage21: React.FC<IconLinearMessage21Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M19.071 4.929c2.182 2.182 4.08 6.712 2.086 10.53-.207.397-.31.595-.348.69-.161.405-.185.611-.12 1.041.016.102.05.235.12.502.207.8.31 1.2.3 1.49a2 2 0 0 1-1.927 1.927c-.29.01-.69-.093-1.49-.3-.267-.07-.4-.104-.502-.12-.43-.065-.643-.04-1.047.122-.095.039-.291.142-.682.348-3.805 2.007-8.257.187-10.532-2.088-3.905-3.905-3.905-10.237 0-14.142s10.237-3.905 14.142 0Z"/><path fill="currentColor" d="M8.858 11.858a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
