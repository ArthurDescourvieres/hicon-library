import React from 'react';

export interface IconBoldPauseCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPauseCircle: React.FC<IconBoldPauseCircleProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m9.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/>
    </svg>
  );
};
