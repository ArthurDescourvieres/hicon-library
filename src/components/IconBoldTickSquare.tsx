import React from 'react';

export interface IconBoldTickSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTickSquare: React.FC<IconBoldTickSquareProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M3.955 5.061C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06M17.559 9.5a.75.75 0 1 0-1.119-1l-3.369 3.763c-.683.762-1.142 1.273-1.535 1.604-.375.314-.595.383-.787.383s-.412-.069-.787-.383c-.393-.33-.852-.842-1.535-1.604l-.87-.97a.75.75 0 0 0-1.117 1l.907 1.012c.635.71 1.166 1.303 1.65 1.71.513.43 1.066.735 1.752.735s1.239-.304 1.752-.735c.484-.407 1.015-1 1.65-1.71z" clip-rule="evenodd"/>
    </svg>
  );
};
