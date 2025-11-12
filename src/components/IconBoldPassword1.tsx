import React from 'react';

export interface IconBoldPassword1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPassword1: React.FC<IconBoldPassword1Props> = ({
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
      <path fill="#2D264B" d="M7.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/><path fill="#2D264B" fill-rule="evenodd" d="M3.955 5.061C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06M9 9.25a2.75 2.75 0 1 0 2.646 3.5h1.843c.055.271.02.556-.107.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 .279-1.48h1.486c.055.271.02.556-.107.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 0-2.46.94.94 0 0 0-.842-.52h-5.236A2.75 2.75 0 0 0 9 9.25" clip-rule="evenodd"/>
    </svg>
  );
};
