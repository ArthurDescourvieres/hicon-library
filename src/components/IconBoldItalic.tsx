import React from 'react';

export interface IconBoldItalicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldItalic: React.FC<IconBoldItalicProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M11.955 2.25h.09c1.837 0 3.276 0 4.419.124 1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916.124 1.143.124 2.582.124 4.419v.09c0 1.837 0 3.276-.124 4.419-.126 1.165-.388 2.11-.974 2.916a5.8 5.8 0 0 1-1.272 1.272c-.807.586-1.75.848-2.916.974-1.143.124-2.582.124-4.419.124h-.09c-1.837 0-3.276 0-4.419-.124-1.165-.126-2.11-.388-2.916-.974a5.8 5.8 0 0 1-1.272-1.272c-.586-.807-.848-1.75-.974-2.916-.124-1.143-.124-2.582-.124-4.419v-.09c0-1.837 0-3.276.124-4.419.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 4.62 3.348c.807-.586 1.75-.848 2.916-.974 1.143-.124 2.582-.124 4.419-.124M9 6.25h8a.75.75 0 0 1 0 1.5h-3.385l-1.7 8.5H15a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3.385l1.7-8.5H9a.75.75 0 0 1 0-1.5" clip-rule="evenodd"/>
    </svg>
  );
};
