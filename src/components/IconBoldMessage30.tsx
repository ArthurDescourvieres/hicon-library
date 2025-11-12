import React from 'react';

export interface IconBoldMessage30Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage30: React.FC<IconBoldMessage30Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M3.108 15.928c-2.417-3.91-.453-8.727 1.82-11 3.904-3.904 10.236-3.904 14.141 0 3.906 3.906 3.906 10.238 0 14.143-2.368 2.368-7.098 4.245-10.999 1.82-.216-.134-.324-.201-.407-.234a.9.9 0 0 0-.446-.068 2.5 2.5 0 0 0-.388.085c-1.258.326-1.887.489-2.34.396a2 2 0 0 1-1.561-1.56c-.092-.454.07-1.083.397-2.34.051-.2.077-.3.084-.388a.9.9 0 0 0-.067-.446c-.033-.082-.1-.19-.234-.408m13.032-6.82a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
