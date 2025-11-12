import React from 'react';

export interface IconBoldMessage25Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage25: React.FC<IconBoldMessage25Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M20.89 15.928c2.417-3.91.453-8.727-1.819-11-3.905-3.904-10.237-3.904-14.142 0-3.905 3.906-3.905 10.238 0 14.143 2.368 2.368 7.098 4.245 11 1.82.215-.134.323-.201.406-.234a.9.9 0 0 1 .446-.068c.089.007.189.033.389.085 1.257.326 1.886.489 2.34.396a2 2 0 0 0 1.56-1.56c.093-.454-.07-1.083-.396-2.34-.052-.2-.078-.3-.085-.388a.9.9 0 0 1 .067-.446c.033-.082.1-.19.235-.408M7.859 7.108a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
