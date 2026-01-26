import React from 'react';

export interface IconBoldTextAlignRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTextAlignRight: React.FC<IconBoldTextAlignRightProps> = ({
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
      <path fill="currentColor" d="M5 6.75h14a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5m8 4h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5m-8 2.5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm8 5.5h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5"/>
    </svg>
  );
};
