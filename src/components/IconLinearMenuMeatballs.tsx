import React from 'react';

export interface IconLinearMenuMeatballsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMenuMeatballs: React.FC<IconLinearMenuMeatballsProps> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm16 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>
    </svg>
  );
};
