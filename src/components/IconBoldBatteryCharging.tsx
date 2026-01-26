import React from 'react';

export interface IconBoldBatteryChargingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldBatteryCharging: React.FC<IconBoldBatteryChargingProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M8 6h4c.929 0 1.393 0 1.782.062A5 5 0 0 1 17.583 9H19a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.417a5 5 0 0 1-3.8 2.938C13.392 18 12.928 18 12 18H8c-.929 0-1.394 0-1.782-.062a5 5 0 0 1-4.156-4.156C2 13.393 2 12.93 2 12s0-1.393.062-1.782a5 5 0 0 1 4.156-4.156C6.606 6 7.07 6 8 6m1.978 3.44a.75.75 0 1 0-1.216-.88l-.574.795a12 12 0 0 0-.655.96c-.156.27-.324.63-.274 1.046.045.384.228.737.513.996.308.28.697.356 1.009.388.313.033.712.034 1.167.035h.038c.514.002.841.004 1.074.028.095.01.15.022.178.029l.005.01a1 1 0 0 1-.08.152c-.119.198-.312.459-.619.868l-.511.684a.75.75 0 1 0 1.2.898l.535-.714c.276-.37.518-.692.682-.964.162-.27.338-.633.293-1.054a1.6 1.6 0 0 0-.51-1.007c-.309-.285-.703-.362-1.018-.394a13 13 0 0 0-1.186-.036H9.99c-.505-.001-.825-.003-1.053-.027a1 1 0 0 1-.174-.028l-.006-.011c.01-.026.032-.074.075-.15.114-.196.3-.454.594-.861z" clip-rule="evenodd"/>
    </svg>
  );
};
