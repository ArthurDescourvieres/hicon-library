import React from 'react';

export interface IconBoldSearch2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSearch2: React.FC<IconBoldSearch2Props> = ({
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
      <path fill="#2D264B" d="M2 10a9 9 0 1 1 18 0 9 9 0 0 1-18 0m17.53 7.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 1 0 1.06-1.06z"/>
    </svg>
  );
};
