import React from 'react';

export interface IconBoldMenuKebabProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMenuKebab: React.FC<IconBoldMenuKebabProps> = ({
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
      <path fill="currentColor" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  );
};
