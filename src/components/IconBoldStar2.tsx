import React from 'react';

export interface IconBoldStar2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldStar2: React.FC<IconBoldStar2Props> = ({
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
      <path fill="currentColor" d="M16.164 4.276C14.854.24 9.146.24 7.836 4.276a2.88 2.88 0 0 1-2.738 1.989c-4.242 0-6.006 5.428-2.574 7.92a2.88 2.88 0 0 1 1.046 3.22c-1.311 4.033 3.306 7.388 6.738 4.895a2.88 2.88 0 0 1 3.384 0c3.432 2.493 8.049-.862 6.738-4.896a2.88 2.88 0 0 1 1.046-3.218c3.431-2.493 1.668-7.921-2.574-7.921a2.88 2.88 0 0 1-2.738-1.99"/>
    </svg>
  );
};
