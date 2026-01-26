import React from 'react';

export interface IconBoldPassword5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPassword5: React.FC<IconBoldPassword5Props> = ({
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
      <path fill="currentColor" d="M7.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/><path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9 9.25a2.75 2.75 0 1 0 2.646 3.5h1.843c.055.271.02.556-.107.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 .279-1.48h1.486c.055.271.02.556-.107.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 0-2.46.94.94 0 0 0-.842-.52h-5.236A2.75 2.75 0 0 0 9 9.25" clip-rule="evenodd"/>
    </svg>
  );
};
