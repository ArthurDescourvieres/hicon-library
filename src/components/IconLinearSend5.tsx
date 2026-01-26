import React from 'react';

export interface IconLinearSend5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearSend5: React.FC<IconLinearSend5Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M3.07 7.566C2.56 4.9 4.9 2.559 7.567 3.07l9.149 1.754a4.5 4.5 0 0 1 3.5 3.294c.866 3.352-2.244 6.401-5.565 5.425a.891.891 0 0 0-1.106 1.106c.976 3.321-2.073 6.43-5.425 5.565a4.5 4.5 0 0 1-3.294-3.5z"/>
    </svg>
  );
};
