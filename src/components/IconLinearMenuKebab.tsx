import React from 'react';

export interface IconLinearMenuKebabProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMenuKebab: React.FC<IconLinearMenuKebabProps> = ({
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
      <path stroke="#414141" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
    </svg>
  );
};
