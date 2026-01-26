import React from 'react';

export interface IconBoldProfileAdd1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldProfileAdd1: React.FC<IconBoldProfileAdd1Props> = ({
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
      <path fill="currentColor" d="M9 2a4.75 4.75 0 1 0 0 9.5A4.75 4.75 0 0 0 9 2m10.75 6.75a.75.75 0 0 0-1.5 0V11H16a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0V12.5H22a.75.75 0 0 0 0-1.5h-2.25zM6 13a4.75 4.75 0 1 0 0 9.5h6a4.75 4.75 0 1 0 0-9.5z"/>
    </svg>
  );
};
