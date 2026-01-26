import React from 'react';

export interface IconLinearPassword6Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearPassword6: React.FC<IconLinearPassword6Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m17 14 .053-.106a2 2 0 0 0 0-1.788.19.19 0 0 0-.171-.106h-5.959M14 14l.053-.106a2 2 0 0 0 0-1.788L14 12m-3.077 0a1 1 0 0 0-.072-.371l-.4-1A1 1 0 0 0 9.523 10H8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.523a1 1 0 0 0 .928-.629l.4-1a1 1 0 0 0 .072-.371ZM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
