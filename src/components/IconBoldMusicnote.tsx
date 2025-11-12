import React from 'react';

export interface IconBoldMusicnoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMusicnote: React.FC<IconBoldMusicnoteProps> = ({
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
      <path fill="#2D264B" d="M13.42 2.286a2.75 2.75 0 0 0-3.053 1.848 3 3 0 0 0-.126.832 25 25 0 0 0-.005 1.109l.001.075c.002.187.003.35.013.501v7.497a3.75 3.75 0 1 0 1.5 3V8.902l.22.12 3.382 1.818c.398.213.72.387.985.513s.527.232.797.276a2.75 2.75 0 0 0 3.048-1.821c.089-.26.12-.54.134-.834.015-.292.015-.658.015-1.11v-.076c0-.316 0-.564-.041-.8a2.75 2.75 0 0 0-1.015-1.694c-.19-.147-.408-.264-.687-.413L15.2 3.07c-.398-.213-.72-.386-.985-.51a3 3 0 0 0-.795-.275"/>
    </svg>
  );
};
