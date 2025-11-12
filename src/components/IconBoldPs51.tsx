import React from 'react';

export interface IconBoldPs51Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPs51: React.FC<IconBoldPs51Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M6.49 4.25a5.51 5.51 0 0 0-5.456 6.29l.23 1.617 1.457 5.097a3.442 3.442 0 0 0 6.204.915l.375-.582c1.263-1.965 4.137-1.965 5.4 0l.229.356a3.934 3.934 0 0 0 7.204-1.57l.833-5.833a5.511 5.511 0 0 0-7.694-5.815l-.531.236c-1.025.456-1.44.636-1.858.725a4.25 4.25 0 0 1-1.766 0c-.418-.089-.833-.27-1.858-.725l-.531-.236A5.5 5.5 0 0 0 6.49 4.25m.51 4a.75.75 0 0 1 .75.75v1.25H9a.75.75 0 0 1 0 1.5H7.75V13a.75.75 0 0 1-1.5 0v-1.25H5a.75.75 0 0 1 0-1.5h1.25V9A.75.75 0 0 1 7 8.25M17 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-2 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
