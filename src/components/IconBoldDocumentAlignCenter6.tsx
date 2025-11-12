import React from 'react';

export interface IconBoldDocumentAlignCenter6Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDocumentAlignCenter6: React.FC<IconBoldDocumentAlignCenter6Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M21 12c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12c0 .839 0 1.584.01 2.25h.07c.853 0 1.372 0 1.82.07a5.75 5.75 0 0 1 4.78 4.78c.07.448.07.967.07 1.82v.07c.666.01 1.411.01 2.25.01 3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12m-7-4.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zm2 4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"/><path fill="#2D264B" d="M4.665 15.802c-.309-.048-.69-.052-1.6-.052.095 1.44.326 2.412.89 3.189a5 5 0 0 0 1.106 1.106c.777.564 1.75.795 3.189.89 0-.91-.003-1.291-.052-1.6a4.25 4.25 0 0 0-3.533-3.533"/>
    </svg>
  );
};
