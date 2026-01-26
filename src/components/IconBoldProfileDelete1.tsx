import React from 'react';

export interface IconBoldProfileDelete1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldProfileDelete1: React.FC<IconBoldProfileDelete1Props> = ({
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
      <path fill="currentColor" d="M9.75 2a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m8.652 7.341a.75.75 0 0 0-1.061 1.06l1.591 1.592-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.592-1.59 1.59 1.59a.75.75 0 1 0 1.061-1.06l-1.59-1.591 1.59-1.591a.75.75 0 0 0-1.06-1.061l-1.591 1.591zM6.75 13a4.75 4.75 0 1 0 0 9.5h6a4.75 4.75 0 1 0 0-9.5z"/>
    </svg>
  );
};
