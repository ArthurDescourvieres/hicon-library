import React from 'react';

export interface IconLinearHeadphone1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearHeadphone1: React.FC<IconLinearHeadphone1Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M2.51 14.902A2 2 0 0 1 5 16.84v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 1.51-1.94Zm0 0-.113-.75a9.71 9.71 0 1 1 19.206 0l-.112.75m0 0A2 2 0 0 0 19 16.84v2a2 2 0 1 0 4 0v-2a2 2 0 0 0-1.51-1.94Z"/>
    </svg>
  );
};
