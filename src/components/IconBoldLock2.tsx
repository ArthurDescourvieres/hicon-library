import React from 'react';

export interface IconBoldLock2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLock2: React.FC<IconBoldLock2Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M6.25 7a5.75 5.75 0 1 1 11.5 0v1.114a.8.8 0 0 1-.025.193 5 5 0 0 1 3.03 3.148C21 12.208 21 13.139 21 15s0 2.792-.245 3.545a5 5 0 0 1-3.21 3.21C16.792 22 15.861 22 14 22h-4c-1.861 0-2.792 0-3.545-.245a5 5 0 0 1-3.21-3.21C3 17.792 3 16.861 3 15s0-2.792.245-3.545a5 5 0 0 1 3.03-3.148.8.8 0 0 1-.025-.193zm1.5 1.034C8.32 8 9.035 8 10 8h4c.965 0 1.68 0 2.25.034V7a4.25 4.25 0 0 0-8.5 0zM12 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
    </svg>
  );
};
