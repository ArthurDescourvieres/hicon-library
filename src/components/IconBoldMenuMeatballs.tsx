import React from 'react';

export interface IconBoldMenuMeatballsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMenuMeatballs: React.FC<IconBoldMenuMeatballsProps> = ({
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
      <path fill="#2D264B" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m16 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4"/>
    </svg>
  );
};
