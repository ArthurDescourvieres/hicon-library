import React from 'react';

export interface IconLinearMessage1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMessage1: React.FC<IconLinearMessage1Props> = ({
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
      <path stroke="#414141" stroke-width="1.5" d="M22 10c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 2 16.8 2 14 2h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 4.73C2 5.8 2 7.2 2 10v4.228A3.77 3.77 0 0 0 5.772 18h.601c.78 0 1.312.787 1.023 1.51-.409 1.021.768 1.945 1.662 1.305l2.611-1.864.053-.038A5 5 0 0 1 14.57 18h.615c1.688 0 2.533 0 3.222-.202a5 5 0 0 0 3.391-3.391c.202-.69.202-1.534.202-3.223z"/><path fill="#414141" d="M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
