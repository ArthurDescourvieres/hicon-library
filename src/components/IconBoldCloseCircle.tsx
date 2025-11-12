import React from 'react';

export interface IconBoldCloseCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldCloseCircle: React.FC<IconBoldCloseCircleProps> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m2.652-11.348A.75.75 0 1 0 13.59 9.59L12 11.182l-1.591-1.591a.75.75 0 1 0-1.06 1.06l1.59 1.592-1.59 1.59a.75.75 0 0 0 1.06 1.061L12 13.304l1.591 1.59a.75.75 0 1 0 1.06-1.06l-1.59-1.591z" clip-rule="evenodd"/>
    </svg>
  );
};
