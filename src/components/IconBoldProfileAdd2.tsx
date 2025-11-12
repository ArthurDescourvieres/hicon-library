import React from 'react';

export interface IconBoldProfileAdd2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldProfileAdd2: React.FC<IconBoldProfileAdd2Props> = ({
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
      <path fill="#2D264B" d="M18.75 15a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25V21a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25zM6 6.75a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"/><path fill="#2D264B" d="M3 17.75A4.75 4.75 0 0 1 7.75 13h6c.98 0 1.89.297 2.646.805A2 2 0 0 0 16 15v1h-1a2 2 0 1 0 0 4h1v1c0 .297.065.578.18.832a4.73 4.73 0 0 1-2.43.668h-6A4.75 4.75 0 0 1 3 17.75"/>
    </svg>
  );
};
