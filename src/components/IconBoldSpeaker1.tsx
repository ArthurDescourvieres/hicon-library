import React from 'react';

export interface IconBoldSpeaker1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSpeaker1: React.FC<IconBoldSpeaker1Props> = ({
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
      <path fill="#2D264B" d="M12 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"/><path fill="#2D264B" fill-rule="evenodd" d="M12 13.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M12 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"/><path fill="#2D264B" fill-rule="evenodd" d="M11.955.25c-1.837 0-3.276 0-4.419.124-1.165.126-2.11.388-2.916.974A5.8 5.8 0 0 0 3.348 2.62c-.586.807-.848 1.75-.974 2.916C2.25 6.68 2.25 8.118 2.25 9.955v4.09c0 1.837 0 3.276.124 4.419.126 1.165.388 2.11.974 2.916a5.8 5.8 0 0 0 1.272 1.272c.807.586 1.75.848 2.916.974 1.143.124 2.582.124 4.419.124h.09c1.837 0 3.276 0 4.419-.124 1.165-.126 2.11-.388 2.916-.974a5.8 5.8 0 0 0 1.272-1.272c.586-.807.848-1.75.974-2.916.124-1.143.124-2.582.124-4.419v-4.09c0-1.837 0-3.276-.124-4.419-.126-1.165-.388-2.11-.974-2.916a5.8 5.8 0 0 0-1.272-1.272C18.573.762 17.63.5 16.464.374 15.32.25 13.881.25 12.045.25zM9.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-1 9a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"/>
    </svg>
  );
};
