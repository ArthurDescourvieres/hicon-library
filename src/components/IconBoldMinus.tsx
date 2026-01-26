import React from 'react';

export interface IconBoldMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMinus: React.FC<IconBoldMinusProps> = ({
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
      <path fill="currentColor" d="M4 11.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
};
