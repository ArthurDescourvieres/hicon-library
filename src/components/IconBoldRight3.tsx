import React from 'react';

export interface IconBoldRight3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldRight3: React.FC<IconBoldRight3Props> = ({
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
      <path fill="#2D264B" d="M2 11.62a.75.75 0 0 1 .75-.75H13V8.755c0-2.282 2.62-3.571 4.427-2.18L21.15 9.44a2.75 2.75 0 0 1 0 4.359l-3.722 2.864C15.62 18.055 13 16.766 13 14.484V12.37H2.75a.75.75 0 0 1-.75-.75"/>
    </svg>
  );
};
