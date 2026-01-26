import React from 'react';

export interface IconBoldFilter3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldFilter3: React.FC<IconBoldFilter3Props> = ({
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
      <path fill="currentColor" d="M6.472 2.25c-2.31 0-4.222 1.826-4.222 4.123A4.08 4.08 0 0 0 3.627 9.42l3.253 2.896a4.04 4.04 0 0 1 1.37 3.02v4.177c0 1.861 2.136 2.854 3.609 1.813l1.941-1.371a3.4 3.4 0 0 0 1.45-2.773v-1.73c0-1.2.544-2.345 1.497-3.128l3.52-2.894a4.03 4.03 0 0 0 1.483-3.112c0-2.267-1.886-4.068-4.166-4.068z"/>
    </svg>
  );
};
