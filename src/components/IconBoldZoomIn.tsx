import React from 'react';

export interface IconBoldZoomInProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldZoomIn: React.FC<IconBoldZoomInProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M11 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18m.75 6a.75.75 0 0 0-1.5 0v2.25H8a.75.75 0 0 0 0 1.5h2.25V14a.75.75 0 0 0 1.5 0v-2.25H14a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"/><path fill="currentColor" d="M19.359 18.298a.75.75 0 0 0-1.061 1.06l4 4a.75.75 0 0 0 1.06-1.06z"/>
    </svg>
  );
};
