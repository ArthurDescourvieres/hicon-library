import React from 'react';

export interface IconBoldLike1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLike1: React.FC<IconBoldLike1Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M21.455 4.73C22 5.8 22 7.2 22 10v1.184c0 1.69 0 2.534-.202 3.223a5 5 0 0 1-3.391 3.391c-.69.202-1.534.202-3.223.202h-.614a5 5 0 0 0-2.848.913l-.053.038-2.61 1.864c-.895.64-2.072-.284-1.663-1.305A1.1 1.1 0 0 0 6.373 18h-.601A3.77 3.77 0 0 1 2 14.228V10c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 2.545C5.8 2 7.2 2 10 2h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185M12.8 6.573c.837-.53 2.189-1.033 3.356.157C18.926 9.556 14.176 15 12 15S5.074 9.556 7.844 6.73c1.167-1.19 2.519-.688 3.356-.157.473.3 1.128.3 1.6 0" clip-rule="evenodd"/>
    </svg>
  );
};
