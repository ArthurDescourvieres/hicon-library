import React from 'react';

export interface IconBoldDocumentAlignLeft16Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDocumentAlignLeft16: React.FC<IconBoldDocumentAlignLeft16Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M3 13c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-.839 0-1.584-.01-2.25h-.07c-.853 0-1.372 0-1.82-.07a5.75 5.75 0 0 1-4.78-4.78c-.07-.448-.07-.967-.07-1.82v-.07C13.584 2 12.839 2 12 2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06C3 5.375 3 7.251 3 11zm5-5.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="#2D264B" d="M19.335 7.198c.308.049.69.052 1.6.052-.095-1.44-.326-2.412-.89-3.189a5 5 0 0 0-1.106-1.106c-.777-.564-1.75-.795-3.189-.89 0 .91.004 1.291.052 1.6a4.25 4.25 0 0 0 3.533 3.533"/>
    </svg>
  );
};
