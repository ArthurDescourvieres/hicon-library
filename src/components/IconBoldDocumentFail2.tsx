import React from 'react';

export interface IconBoldDocumentFail2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDocumentFail2: React.FC<IconBoldDocumentFail2Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M3 13c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-.839 0-1.584-.01-2.25h-.07c-.853 0-1.372 0-1.82-.07a5.75 5.75 0 0 1-4.78-4.78c-.07-.448-.07-.967-.07-1.82v-.07C13.584 2 12.839 2 12 2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06C3 5.375 3 7.251 3 11zm11.652-1.348a.75.75 0 1 0-1.06-1.061L12 12.182l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.592-1.59 1.59a.75.75 0 0 0 1.06 1.061L12 14.304l1.591 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.591z" clip-rule="evenodd"/><path fill="#2D264B" d="M19.335 7.198c.308.049.69.052 1.6.052-.095-1.44-.326-2.412-.89-3.189a5 5 0 0 0-1.106-1.106c-.777-.564-1.75-.795-3.189-.89 0 .91.004 1.291.052 1.6a4.25 4.25 0 0 0 3.533 3.533"/>
    </svg>
  );
};
