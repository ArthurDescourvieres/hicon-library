import React from 'react';

export interface IconBoldDocumentAlignRight9Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDocumentAlignRight9: React.FC<IconBoldDocumentAlignRight9Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M3 11c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 .839 0 1.584-.01 2.25h-.07c-.853 0-1.372 0-1.82.07a5.75 5.75 0 0 0-4.78 4.78c-.07.448-.07.967-.07 1.82v.07c-.666.01-1.411.01-2.25.01-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13zm4.25-3c0 .414.336.75.75.75h8a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75M13 12.75h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5" clip-rule="evenodd"/><path fill="currentColor" d="M19.335 16.802c.308-.049.69-.052 1.6-.052-.095 1.44-.326 2.412-.89 3.189a5 5 0 0 1-1.106 1.106c-.777.564-1.75.795-3.189.89 0-.91.004-1.291.052-1.6a4.25 4.25 0 0 1 3.533-3.533"/>
    </svg>
  );
};
