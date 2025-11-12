import React from 'react';

export interface IconBoldLogoutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLogout: React.FC<IconBoldLogoutProps> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M7 11.25a.75.75 0 0 0 0 1.5h8V15c0 .929 0 1.393-.062 1.782a5 5 0 0 1-4.156 4.156C10.393 21 9.93 21 9 21s-1.394 0-1.782-.062a5 5 0 0 1-4.156-4.156C3 16.393 3 15.93 3 15V9c0-.929 0-1.394.062-1.782a5 5 0 0 1 4.156-4.156C7.606 3 8.07 3 9 3s1.393 0 1.782.062a5 5 0 0 1 4.156 4.156C15 7.606 15 8.07 15 9v2.25zm8 0h4.81c-.327-.323-.809-.706-1.513-1.264l-1.763-1.398a.75.75 0 0 1 .932-1.176l1.799 1.427c.672.533 1.227.973 1.622 1.367.406.404.742.852.834 1.425a2.4 2.4 0 0 1 0 .738c-.092.573-.428 1.021-.834 1.425-.395.394-.95.834-1.622 1.367l-1.799 1.427a.75.75 0 0 1-.932-1.176l1.763-1.398c.704-.558 1.186-.941 1.514-1.264H15z" clip-rule="evenodd"/>
    </svg>
  );
};
