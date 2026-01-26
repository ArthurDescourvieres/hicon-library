import React from 'react';

export interface IconBoldLeft3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLeft3: React.FC<IconBoldLeft3Props> = ({
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
      <path fill="currentColor" d="M22 11.62a.75.75 0 0 0-.75-.75H11V8.755c0-2.282-2.62-3.571-4.427-2.18L2.85 9.44a2.75 2.75 0 0 0 0 4.359l3.722 2.864C8.38 18.055 11 16.766 11 14.484V12.37h10.25a.75.75 0 0 0 .75-.75"/>
    </svg>
  );
};
