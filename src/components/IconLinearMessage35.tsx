import React from 'react';

export interface IconLinearMessage35Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMessage35: React.FC<IconLinearMessage35Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M2.608 5.648C2 6.936 2 8.774 2 12c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12c0-3.249 0-5.09-.621-6.379m-18.771.027q.148-.312.347-.587A5 5 0 0 1 4.06 3.955C5.375 3 7.251 3 11 3h2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106q.191.263.334.56m-18.771.027L3 6l1.929 1.929c3.333 3.333 5 5 7.071 5s3.738-1.667 7.071-5L21 6l.379-.379"/>
    </svg>
  );
};
