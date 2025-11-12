import React from 'react';

export interface IconBoldTextAlignCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTextAlignCenter: React.FC<IconBoldTextAlignCenterProps> = ({
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
      <path fill="#2D264B" d="M5 5.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm4 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm-4 4a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm4 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
};
