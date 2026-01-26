import React from 'react';

export interface IconBoldVoiceSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldVoiceSquare: React.FC<IconBoldVoiceSquareProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M11.955 2.25h.09c1.837 0 3.276 0 4.419.124 1.165.126 2.11.388 2.916.974a5.8 5.8 0 0 1 1.272 1.272c.586.807.848 1.75.974 2.916.124 1.143.124 2.582.124 4.419v.09c0 1.837 0 3.276-.124 4.419-.126 1.165-.388 2.11-.974 2.916a5.8 5.8 0 0 1-1.272 1.272c-.807.586-1.75.848-2.916.974-1.143.124-2.582.124-4.419.124h-.09c-1.837 0-3.276 0-4.419-.124-1.165-.126-2.11-.388-2.916-.974a5.8 5.8 0 0 1-1.272-1.272c-.586-.807-.848-1.75-.974-2.916-.124-1.143-.124-2.582-.124-4.419v-.09c0-1.837 0-3.276.124-4.419.126-1.165.388-2.11.974-2.916A5.8 5.8 0 0 1 4.62 3.348c.807-.586 1.75-.848 2.916-.974 1.143-.124 2.582-.124 4.419-.124M12.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm-3 1a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm6 0a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm-9 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm12 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/>
    </svg>
  );
};
