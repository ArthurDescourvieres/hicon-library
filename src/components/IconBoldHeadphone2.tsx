import React from 'react';

export interface IconBoldHeadphone2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldHeadphone2: React.FC<IconBoldHeadphone2Props> = ({
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
      <path fill="currentColor" d="M10.397 3.895A8.96 8.96 0 0 1 20.862 14.04l-.008.055a2.75 2.75 0 0 0-2.604 2.746v2a2.75 2.75 0 1 0 5.5 0v-2a2.75 2.75 0 0 0-1.43-2.413l.025-.165a10.46 10.46 0 1 0-20.69 0l.025.165a2.75 2.75 0 0 0-1.43 2.413v2a2.75 2.75 0 1 0 5.5 0v-2a2.75 2.75 0 0 0-2.604-2.746l-.008-.055a8.96 8.96 0 0 1 7.259-10.145"/><path fill="currentColor" d="M7.53 13.31a.75.75 0 0 0-1.06 1.061l.4.4.107.108a4.25 4.25 0 0 1-.107 6.031l-.4.4a.75.75 0 1 0 1.06 1.061l.406-.405.117-.118a5.75 5.75 0 0 0-.117-8.132zm10 1.061a.75.75 0 1 0-1.06-1.06l-.406.405-.117.118a5.75 5.75 0 0 0 0 8.014l.117.118.406.405a.75.75 0 1 0 1.06-1.06l-.4-.4-.107-.108a4.25 4.25 0 0 1 .107-6.032z"/>
    </svg>
  );
};
