import React from 'react';

export interface IconBoldScan6Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldScan6: React.FC<IconBoldScan6Props> = ({
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
      <path fill="currentColor" d="M9 21.75a.75.75 0 0 0 0-1.5H8A4.25 4.25 0 0 1 3.75 16v-1a.75.75 0 0 0-1.5 0v1A5.75 5.75 0 0 0 8 21.75zm7 0A5.75 5.75 0 0 0 21.75 16v-1a.75.75 0 0 0-1.5 0v1A4.25 4.25 0 0 1 16 20.25h-1a.75.75 0 0 0 0 1.5zM20.25 9a.75.75 0 0 0 1.5 0V8A5.75 5.75 0 0 0 16 2.25h-1a.75.75 0 0 0 0 1.5h1A4.25 4.25 0 0 1 20.25 8zm-18 0a.75.75 0 0 0 1.5 0V8A4.25 4.25 0 0 1 8 3.75h1a.75.75 0 0 0 0-1.5H8A5.75 5.75 0 0 0 2.25 8z"/><path fill="currentColor" d="M18 16c0 .943 0 1.414-.293 1.707S16.943 18 16 18s-1.414 0-1.707-.293S14 16.943 14 16s0-1.414.293-1.707S15.057 14 16 14s1.414 0 1.707.293S18 15.057 18 16m0-8c0 .943 0 1.414-.293 1.707S16.943 10 16 10s-1.414 0-1.707-.293S14 8.943 14 8s0-1.414.293-1.707S15.057 6 16 6s1.414 0 1.707.293S18 7.057 18 8m-8 0c0 .943 0 1.414-.293 1.707S8.943 10 8 10s-1.414 0-1.707-.293S6 8.943 6 8s0-1.414.293-1.707S7.057 6 8 6s1.414 0 1.707.293S10 7.057 10 8"/>
    </svg>
  );
};
