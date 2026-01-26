import React from 'react';

export interface IconBoldStar1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldStar1: React.FC<IconBoldStar1Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M7.836 4.276c1.31-4.035 7.018-4.035 8.328 0a2.88 2.88 0 0 0 2.738 1.989c4.242 0 6.005 5.428 2.574 7.92a2.88 2.88 0 0 0-1.046 3.22c1.31 4.033-3.306 7.388-6.738 4.895a2.88 2.88 0 0 0-3.384 0c-3.432 2.493-8.049-.862-6.738-4.896a2.88 2.88 0 0 0-1.046-3.218C-.908 11.693.856 6.265 5.098 6.265a2.88 2.88 0 0 0 2.738-1.99m6.874 3.37a.75.75 0 1 0-1.42.48c.43 1.273 1.653 2.108 3.002 2.108a.75.75 0 1 0 0-1.5c-.74 0-1.368-.456-1.582-1.089" clip-rule="evenodd"/>
    </svg>
  );
};
