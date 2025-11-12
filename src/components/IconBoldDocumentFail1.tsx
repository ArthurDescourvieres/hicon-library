import React from 'react';

export interface IconBoldDocumentFail1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDocumentFail1: React.FC<IconBoldDocumentFail1Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M3 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 3.955C6.375 3 8.251 3 12 3c.839 0 1.584 0 2.25.01v.07c0 .853 0 1.372.07 1.82a5.75 5.75 0 0 0 4.78 4.78c.448.07.967.07 1.82.07h.07c.01.666.01 1.411.01 2.25 0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 21 15.749 21 12 21s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 17.625 3 15.749 3 12m10.652-.348a.75.75 0 1 0-1.06-1.061L11 12.182l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.592-1.59 1.59a.75.75 0 0 0 1.06 1.061L11 14.304l1.591 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.591z" clip-rule="evenodd"/><path fill="#2D264B" d="M15.802 4.665c-.048-.309-.052-.69-.052-1.6 1.44.095 2.412.326 3.189.89a5 5 0 0 1 1.106 1.106c.564.777.795 1.75.89 3.189-.91 0-1.291-.003-1.6-.052a4.25 4.25 0 0 1-3.533-3.533"/>
    </svg>
  );
};
