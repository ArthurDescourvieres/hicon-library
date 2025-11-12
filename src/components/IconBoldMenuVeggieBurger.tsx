import React from 'react';

export interface IconBoldMenuVeggieBurgerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMenuVeggieBurger: React.FC<IconBoldMenuVeggieBurgerProps> = ({
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
      <path fill="#2D264B" d="M5 8.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
};
