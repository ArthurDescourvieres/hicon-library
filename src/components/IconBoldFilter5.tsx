import React from 'react';

export interface IconBoldFilter5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldFilter5: React.FC<IconBoldFilter5Props> = ({
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
      <path fill="currentColor" d="M3.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m8 0a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75m4 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-12 0a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m8 0a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75"/>
    </svg>
  );
};
