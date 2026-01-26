import React from 'react';

export interface IconLinearShuffle1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearShuffle1: React.FC<IconLinearShuffle1Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 18h.324a5 5 0 0 0 4.16-2.226l5.032-7.547A5 5 0 0 1 18.676 6h1.09M5 6h.324a5 5 0 0 1 4.16 2.226L12 12l2.516 3.774A5 5 0 0 0 18.676 18h1.09M18.25 4l1.226 1.226a1 1 0 0 1 .29.774M18 7.875l1.409-1.174A1 1 0 0 0 19.766 6M18.25 16l1.226 1.226a1 1 0 0 1 .29.774M18 19.875l1.409-1.174a1 1 0 0 0 .357-.701"/>
    </svg>
  );
};
