import React from 'react';

export interface IconBoldFilter1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldFilter1: React.FC<IconBoldFilter1Props> = ({
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
      <path fill="#6D6D6D" d="M3.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m8 0a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75M18 14.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M3.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"/>
    </svg>
  );
};
