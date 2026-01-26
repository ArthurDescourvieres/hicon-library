import React from 'react';

export interface IconLinearCalling1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearCalling1: React.FC<IconLinearCalling1Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M18.364 11.192v-.728a5 5 0 0 0-4.929-4.928h-.728M21.9 11.9v-.99c0-.845 0-1.267-.032-1.623a8 8 0 0 0-7.255-7.255C14.257 2 13.835 2 12.99 2H12M8.778 9.223a2.76 2.76 0 0 0 .578 3.053l2.397 2.397a2.76 2.76 0 0 0 3.053.579 2.76 2.76 0 0 1 3.053.578l1.458 1.458c.07.07.106.106.135.137a2 2 0 0 1 0 2.706 4 4 0 0 1-.135.137l-.886.887a2.99 2.99 0 0 1-2.759.803 17.91 17.91 0 0 1-13.6-13.6 2.99 2.99 0 0 1 .803-2.76l.886-.886c.07-.07.106-.106.137-.134a2 2 0 0 1 2.706 0c.031.028.067.063.137.134L8.2 6.17a2.76 2.76 0 0 1 .578 3.053Z"/>
    </svg>
  );
};
