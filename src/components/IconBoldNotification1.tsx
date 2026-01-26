import React from 'react';

export interface IconBoldNotification1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldNotification1: React.FC<IconBoldNotification1Props> = ({
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
      <path fill="currentColor" d="M11.1 1.25a5.645 5.645 0 0 0-5.602 6.345l.08.635a2.9 2.9 0 0 1-.912 2.492 4.4 4.4 0 0 0-.975 5.155l.104.213a4.72 4.72 0 0 0 4.246 2.66h8.221a4.562 4.562 0 0 0 3.105-7.905l-.044-.04a3.13 3.13 0 0 1-.977-2.686l.064-.517a5.65 5.65 0 0 0-5.607-6.352zm-1.317 19.3a.75.75 0 1 0-1.2.9l.3.4c1.65 2.2 4.95 2.2 6.6 0l.3-.4a.75.75 0 1 0-1.2-.9l-.3.4a2.625 2.625 0 0 1-4.2 0z"/>
    </svg>
  );
};
