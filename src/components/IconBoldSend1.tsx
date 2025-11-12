import React from 'react';

export interface IconBoldSend1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSend1: React.FC<IconBoldSend1Props> = ({
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
      <path fill="#2D264B" d="M15.8 2.264c-1.822-2.685-5.778-2.685-7.6 0l-5.228 7.71a5.25 5.25 0 0 0-.17 5.606c2.047 3.475 7.132 3.438 9.074-.12a.141.141 0 0 1 .248 0c1.941 3.558 7.027 3.595 9.075.12a5.25 5.25 0 0 0-.171-5.606z"/><path fill="#2D264B" d="M12.75 18.998a.75.75 0 0 0-1.5 0v2a.75.75 0 1 0 1.5 0zM9 20.248a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m6.75.75a.75.75 0 0 0-1.5 0v2a.75.75 0 1 0 1.5 0z"/>
    </svg>
  );
};
