import React from 'react';

export interface IconBoldPauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPause: React.FC<IconBoldPauseProps> = ({
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
      <path fill="currentColor" d="M9.75 3a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0zm6 0a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0z"/>
    </svg>
  );
};
