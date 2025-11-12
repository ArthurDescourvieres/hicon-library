import React from 'react';

export interface IconBoldCamera1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldCamera1: React.FC<IconBoldCamera1Props> = ({
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
      <path fill="#2D264B" d="M12 9.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"/><path fill="#2D264B" fill-rule="evenodd" d="M15.65 2.241a5.494 5.494 0 0 0-7.3 0l-.216.192a3.24 3.24 0 0 1-2.15.817A4.735 4.735 0 0 0 1.25 7.985v5.06c0 1.837 0 3.276.124 4.419.126 1.165.388 2.11.974 2.916a5.8 5.8 0 0 0 1.272 1.272c.807.586 1.75.848 2.916.974 1.143.124 2.582.124 4.419.124h2.09c1.837 0 3.276 0 4.419-.124 1.165-.126 2.11-.388 2.916-.974a5.8 5.8 0 0 0 1.272-1.272c.586-.807.848-1.751.974-2.916.124-1.143.124-2.582.124-4.419v-5.06a4.735 4.735 0 0 0-4.735-4.735c-.792 0-1.557-.29-2.15-.817zM7.25 13a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M18 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
