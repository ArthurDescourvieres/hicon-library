import React from 'react';

export interface IconBoldDisplay2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDisplay2: React.FC<IconBoldDisplay2Props> = ({
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
      <g clip-path="url(#a)"><path fill="#2D264B" d="M3.91 1.709a45.2 45.2 0 0 1 16.18 0 4.46 4.46 0 0 1 3.66 4.385v8.335a4.74 4.74 0 0 1-5.381 4.697 47 47 0 0 0-5.619-.427v2.885c.624.044 1.246.142 1.857.295l1.575.394a.75.75 0 1 1-.364 1.455l-1.575-.394a9.25 9.25 0 0 0-4.486 0l-1.575.394a.75.75 0 0 1-.364-1.455l1.575-.394a11 11 0 0 1 1.857-.295V18.7c-1.878.03-3.754.172-5.619.427A4.74 4.74 0 0 1 .25 14.429V6.094c0-2.154 1.54-4 3.66-4.385"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
};
