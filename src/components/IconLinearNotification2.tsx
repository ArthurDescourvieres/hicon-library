import React from 'react';

export interface IconLinearNotification2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearNotification2: React.FC<IconLinearNotification2Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M15.183 2.615A4.9 4.9 0 0 0 12.803 2H11.1a4.895 4.895 0 0 0-4.857 5.502l.079.635a3.65 3.65 0 0 1-1.147 3.136 3.65 3.65 0 0 0-.809 4.277l.104.213A3.97 3.97 0 0 0 8.04 18h8.221a3.812 3.812 0 0 0 2.594-6.605l-.044-.041a3.9 3.9 0 0 1-1.146-1.994M9.183 21l.3.4c1.35 1.8 4.05 1.8 5.4 0l.3-.4"/><path fill="#414141" d="M19.183 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  );
};
