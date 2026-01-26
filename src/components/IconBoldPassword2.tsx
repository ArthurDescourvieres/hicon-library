import React from 'react';

export interface IconBoldPassword2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPassword2: React.FC<IconBoldPassword2Props> = ({
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
      <path fill="currentColor" d="M7.75 11a.25.25 0 0 1 .25-.25h1.523a.25.25 0 0 1 .232.157l.4 1a.25.25 0 0 1 0 .186l-.4 1a.25.25 0 0 1-.232.157H8a.25.25 0 0 1-.25-.25z"/><path fill="currentColor" fill-rule="evenodd" d="M3.955 5.061C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06M8 9.25A1.75 1.75 0 0 0 6.25 11v2c0 .966.784 1.75 1.75 1.75h1.523a1.75 1.75 0 0 0 1.625-1.1l.36-.9h1.98c.056.271.02.556-.106.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 .279-1.48h1.486c.055.271.02.556-.107.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 0-2.46.94.94 0 0 0-.842-.52h-5.374l-.36-.9a1.75 1.75 0 0 0-1.625-1.1z" clip-rule="evenodd"/>
    </svg>
  );
};
