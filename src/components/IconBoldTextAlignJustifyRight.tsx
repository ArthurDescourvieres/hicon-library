import React from 'react';

export interface IconBoldTextAlignJustifyRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTextAlignJustifyRight: React.FC<IconBoldTextAlignJustifyRightProps> = ({
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
      <path fill="currentColor" d="M13 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm-8 4a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
};
