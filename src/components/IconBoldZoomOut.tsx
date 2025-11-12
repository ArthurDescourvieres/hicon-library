import React from 'react';

export interface IconBoldZoomOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldZoomOut: React.FC<IconBoldZoomOutProps> = ({
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
      <path fill="#2D264B" d="M19.53 17.47a.75.75 0 1 0-1.06 1.06l4 4a.75.75 0 1 0 1.06-1.06z"/><path fill="#2D264B" fill-rule="evenodd" d="M11 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18M8 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
