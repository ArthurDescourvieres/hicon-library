import React from 'react';

export interface IconBoldSun1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSun1: React.FC<IconBoldSun1Props> = ({
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
      <g fill="#2D264B" clip-path="url(#a)"><path d="M12.75 1a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM4.752 3.691a.75.75 0 0 0-1.06 1.061l1.414 1.414a.75.75 0 0 0 1.06-1.06zm15.557 1.061a.75.75 0 1 0-1.061-1.06l-1.414 1.414a.75.75 0 1 0 1.06 1.06zM12 5.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5m-11 6a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm20 0a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM6.166 18.894a.75.75 0 0 0-1.06-1.06l-1.414 1.414a.75.75 0 0 0 1.06 1.06zm12.728-1.06a.75.75 0 0 0-1.06 1.06l1.414 1.415a.75.75 0 0 0 1.06-1.061zM12.75 21a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
};
