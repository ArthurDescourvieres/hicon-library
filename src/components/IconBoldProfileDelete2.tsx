import React from 'react';

export interface IconBoldProfileDelete2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldProfileDelete2: React.FC<IconBoldProfileDelete2Props> = ({
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
      <path fill="currentColor" d="M6.25 6.75a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m-3 11A4.75 4.75 0 0 1 8 13h6c1.169 0 2.239.422 3.066 1.122a2 2 0 0 0-1.36 3.413l.708.708-.707.707a2 2 0 0 0 .328 3.093A4.7 4.7 0 0 1 14 22.5H8a4.75 4.75 0 0 1-4.75-4.75"/><path fill="currentColor" d="M21.894 16.652a.75.75 0 0 0-1.06-1.061l-1.591 1.591-1.591-1.591a.75.75 0 0 0-1.061 1.06l1.591 1.592-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.592-1.59 1.59 1.59a.75.75 0 0 0 1.061-1.06l-1.59-1.591z"/>
    </svg>
  );
};
