import React from 'react';

export interface IconBoldHeadphone1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldHeadphone1: React.FC<IconBoldHeadphone1Props> = ({
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
      <path fill="currentColor" d="M10.397 3.895A8.96 8.96 0 0 1 20.862 14.04l-.008.055a2.75 2.75 0 0 0-2.604 2.746v2a2.75 2.75 0 1 0 5.5 0v-2a2.75 2.75 0 0 0-1.43-2.413l.025-.165a10.46 10.46 0 1 0-20.69 0l.025.165a2.75 2.75 0 0 0-1.43 2.413v2a2.75 2.75 0 1 0 5.5 0v-2a2.75 2.75 0 0 0-2.604-2.746l-.008-.055a8.96 8.96 0 0 1 7.259-10.145"/>
    </svg>
  );
};
