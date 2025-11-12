import React from 'react';

export interface IconLinearLikeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearLike: React.FC<IconLinearLikeProps> = ({
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
      <path stroke="#414141" stroke-width="1.5" d="M3 10a2.5 2.5 0 0 1 5 0v8a2.5 2.5 0 0 1-5 0zm8.575-5.31-2.23 3.625c-.599.973-.898 1.46-1.08 1.992a5 5 0 0 0-.14.496C8 11.353 8 11.923 8 13.066V16.5a4 4 0 0 0 4 4h2.91a5 5 0 0 0 4.472-2.764l1.148-2.297c1.135-2.27-.515-4.939-3.052-4.939h-.69A2.82 2.82 0 0 1 14 7.25l.243-1.58a1.45 1.45 0 0 0-2.668-.98Z"/>
    </svg>
  );
};
