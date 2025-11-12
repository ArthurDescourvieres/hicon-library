import React from 'react';

export interface IconBoldMessage35Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage35: React.FC<IconBoldMessage35Props> = ({
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
      <path fill="#2D264B" d="M2.333 6.41C2 7.65 2 9.36 2 12c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12c0-2.649 0-4.362-.337-5.603L19.561 8.5c-1.633 1.632-2.912 2.911-4.044 3.775-1.159.884-2.252 1.404-3.517 1.404s-2.358-.52-3.517-1.404C7.35 11.411 6.07 10.132 4.439 8.5L2.484 6.545z"/><path fill="#2D264B" d="m3 5 .109.09.407.365L5.459 7.4c1.682 1.681 2.89 2.888 3.934 3.684 1.025.782 1.801 1.096 2.607 1.096s1.582-.314 2.607-1.096c1.043-.796 2.252-2.003 3.934-3.684l2.308-2.308.125-.125c-.308-.425-.61-.703-1.035-1.011C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955C3.637 4.263 3.308 4.575 3 5"/>
    </svg>
  );
};
