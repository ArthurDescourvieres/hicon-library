import React from 'react';

export interface IconBoldFolderCross1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldFolderCross1: React.FC<IconBoldFolderCross1Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M14 21h-4c-1.861 0-2.792 0-3.545-.245a5 5 0 0 1-3.21-3.21C3 16.792 3 13.861 3 12V5.694c0-.914 0-1.371.144-1.724.143-.35.383-.632.68-.8C4.122 3 4.51 3 5.285 3c1.938 0 2.908 0 3.655.424.743.422 1.342 1.127 1.699 2.002l.01.023c.338.83 1.054 1.55 1.95 1.554 1.944.01 4.37.055 4.945.242a5 5 0 0 1 3.21 3.21C21 11.208 21 12.139 21 14s0 2.792-.245 3.545a5 5 0 0 1-3.21 3.21C16.792 21 15.861 21 14 21m-3.47-9.53a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 0 0 1.06 1.061l1.591-1.591 1.591 1.591a.75.75 0 0 0 1.061-1.06l-1.591-1.592 1.591-1.59a.75.75 0 1 0-1.06-1.061l-1.592 1.59z" clip-rule="evenodd"/>
    </svg>
  );
};
