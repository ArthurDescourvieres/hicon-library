import React from 'react';

export interface IconBoldOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldOff: React.FC<IconBoldOffProps> = ({
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
      <path fill="#2D264B" d="M12.75 2a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0z"/><path fill="#2D264B" d="M6.45 4.6a.75.75 0 0 0-.9-1.2 10.73 10.73 0 0 0-4.3 8.6c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-3.491-1.732-6.637-4.294-8.596a.75.75 0 1 0-.912 1.192C19.764 6.292 21.25 9.009 21.25 12a9.25 9.25 0 1 1-14.8-7.4"/>
    </svg>
  );
};
