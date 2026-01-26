import React from 'react';

export interface IconBoldUnlock3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldUnlock3: React.FC<IconBoldUnlock3Props> = ({
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
      <path fill="currentColor" d="M10.75 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.25A5.75 5.75 0 0 0 6.25 7v1.114q0 .1.025.193a5 5 0 0 0-3.03 3.148C3 12.208 3 13.139 3 15s0 2.792.245 3.545a5 5 0 0 0 3.21 3.21C7.208 22 8.139 22 10 22h4c1.861 0 2.792 0 3.545-.245a5 5 0 0 0 3.21-3.21C21 17.792 21 16.861 21 15s0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21A4 4 0 0 0 17 8.114C16.325 8 15.442 8 14 8h-4c-.965 0-1.68 0-2.25.034V7a4.25 4.25 0 0 1 6.8-3.4.75.75 0 1 0 .901-1.2A5.73 5.73 0 0 0 12 1.25M9.25 13a2.75 2.75 0 1 1 3.5 2.646V19a.75.75 0 0 1-1.5 0v-3.354a2.75 2.75 0 0 1-2-2.646" clip-rule="evenodd"/>
    </svg>
  );
};
