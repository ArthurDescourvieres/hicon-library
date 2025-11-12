import React from 'react';

export interface IconBoldPassword6Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPassword6: React.FC<IconBoldPassword6Props> = ({
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
      <path fill="#2D264B" d="M7.75 11a.25.25 0 0 1 .25-.25h1.523a.25.25 0 0 1 .232.157l.4 1a.25.25 0 0 1 0 .186l-.4 1a.25.25 0 0 1-.232.157H8a.25.25 0 0 1-.25-.25z"/><path fill="#2D264B" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8 9.25A1.75 1.75 0 0 0 6.25 11v2c0 .966.784 1.75 1.75 1.75h1.523a1.75 1.75 0 0 0 1.625-1.1l.36-.9h1.98c.056.271.02.556-.106.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 .279-1.48h1.486c.055.271.02.556-.107.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 0-2.46.94.94 0 0 0-.842-.52h-5.374l-.36-.9a1.75 1.75 0 0 0-1.625-1.1z" clip-rule="evenodd"/>
    </svg>
  );
};
