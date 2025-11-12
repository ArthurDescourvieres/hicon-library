import React from 'react';

export interface IconBoldProfile1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldProfile1: React.FC<IconBoldProfile1Props> = ({
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
      <path fill="#2D264B" d="M12 2a4.75 4.75 0 1 0 0 9.5A4.75 4.75 0 0 0 12 2M9 13a4.75 4.75 0 1 0 0 9.5h6a4.75 4.75 0 1 0 0-9.5z"/>
    </svg>
  );
};
