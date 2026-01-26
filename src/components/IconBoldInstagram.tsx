import React from 'react';

export interface IconBoldInstagramProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldInstagram: React.FC<IconBoldInstagramProps> = ({
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
      <path fill="currentColor" d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/><path fill="currentColor" fill-rule="evenodd" d="M11.955 2.25c-1.837 0-3.276 0-4.419.124-1.165.126-2.11.388-2.916.974A5.8 5.8 0 0 0 3.348 4.62c-.586.807-.848 1.75-.974 2.916-.124 1.143-.124 2.582-.124 4.419v.09c0 1.837 0 3.276.124 4.419.126 1.165.388 2.11.974 2.916a5.8 5.8 0 0 0 1.272 1.272c.807.586 1.75.848 2.916.974 1.143.124 2.582.124 4.419.124h.09c1.837 0 3.276 0 4.419-.124 1.165-.126 2.11-.388 2.916-.974a5.8 5.8 0 0 0 1.272-1.272c.586-.807.848-1.75.974-2.916.124-1.143.124-2.582.124-4.419v-.09c0-1.837 0-3.276-.124-4.419-.126-1.165-.388-2.11-.974-2.916a5.8 5.8 0 0 0-1.272-1.272c-.807-.586-1.75-.848-2.916-.974-1.143-.124-2.582-.124-4.419-.124zM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M17 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
