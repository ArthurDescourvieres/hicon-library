import React from 'react';

export interface IconBoldNotification3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldNotification3: React.FC<IconBoldNotification3Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M5.498 7.595A5.645 5.645 0 0 1 11.1 1.25h1.703a5.65 5.65 0 0 1 5.607 6.352l-.064.517c-.125 1 .238 2 .977 2.685l.044.041a4.562 4.562 0 0 1-2.745 7.89l-.19.329c-1.014 1.736-2.592 2.686-4.249 2.686s-3.235-.95-4.247-2.686l-.189-.323a4.72 4.72 0 0 1-3.952-2.651l-.104-.213a4.4 4.4 0 0 1 .975-5.155 2.9 2.9 0 0 0 .912-2.492zM9.52 18.75c.76 1.038 1.742 1.5 2.663 1.5.922 0 1.904-.462 2.664-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
