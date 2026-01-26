import React from 'react';

export interface IconBoldLinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLink: React.FC<IconBoldLinkProps> = ({
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
      <path fill="currentColor" d="M8 6.25a5.75 5.75 0 1 0 0 11.5.75.75 0 0 0 0-1.5 4.25 4.25 0 0 1 0-8.5.75.75 0 0 0 0-1.5m8 0a.75.75 0 0 0 0 1.5 4.25 4.25 0 0 1 0 8.5.75.75 0 0 0 0 1.5 5.75 5.75 0 0 0 0-11.5"/><path fill="currentColor" d="M8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
};
