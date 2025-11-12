import React from 'react';

export interface IconLinearNotification3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearNotification3: React.FC<IconLinearNotification3Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m8.183 18 .4.686c1.8 3.085 5.4 3.085 7.2 0l.4-.686M4.366 15.55l.104.213A3.97 3.97 0 0 0 8.04 18h8.221a3.812 3.812 0 0 0 2.594-6.605l-.044-.041a3.88 3.88 0 0 1-1.21-3.328l.064-.517A4.9 4.9 0 0 0 12.803 2H11.1a4.895 4.895 0 0 0-4.857 5.502l.079.635a3.65 3.65 0 0 1-1.147 3.136 3.65 3.65 0 0 0-.809 4.277Z"/>
    </svg>
  );
};
