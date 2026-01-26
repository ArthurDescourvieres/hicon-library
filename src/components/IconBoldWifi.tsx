import React from 'react';

export interface IconBoldWifiProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldWifi: React.FC<IconBoldWifiProps> = ({
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
      <path fill="currentColor" d="M22.43 6.57C16.67.81 7.33.81 1.57 6.57l-1.1 1.1a.75.75 0 0 0 1.06 1.061l1.1-1.1c5.175-5.175 13.565-5.175 18.74 0l1.1 1.1a.75.75 0 1 0 1.06-1.06z"/><path fill="currentColor" d="M18.83 10.97a9.66 9.66 0 0 0-13.66 0l-.7.7a.75.75 0 1 0 1.06 1.061l.7-.7a8.16 8.16 0 0 1 11.54 0l.7.7a.75.75 0 1 0 1.06-1.06z"/><path fill="currentColor" d="M16.13 15.27a5.84 5.84 0 0 0-8.26 0l-.4.4a.75.75 0 1 0 1.06 1.061l.4-.4a4.34 4.34 0 0 1 6.14 0l.4.4a.75.75 0 1 0 1.06-1.06zM13 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
