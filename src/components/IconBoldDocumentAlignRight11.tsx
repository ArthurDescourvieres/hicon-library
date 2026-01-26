import React from 'react';

export interface IconBoldDocumentAlignRight11Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDocumentAlignRight11: React.FC<IconBoldDocumentAlignRight11Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M3 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 3.955C6.375 3 8.251 3 12 3s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 6.375 21 8.251 21 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 21 15.749 21 12 21c-.839 0-1.584 0-2.25-.01v-.07c0-.853 0-1.372-.07-1.82a5.75 5.75 0 0 0-4.78-4.78c-.448-.07-.967-.07-1.82-.07h-.07C3 13.584 3 12.839 3 12m4.25-4c0 .414.336.75.75.75h8a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0-.75.75M13 11.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="currentColor" d="M8.198 19.335c.049.308.052.69.052 1.6-1.44-.095-2.412-.326-3.189-.89a5 5 0 0 1-1.106-1.106c-.564-.777-.795-1.75-.89-3.189.91 0 1.291.004 1.6.052a4.25 4.25 0 0 1 3.533 3.533"/>
    </svg>
  );
};
