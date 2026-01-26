import React from 'react';

export interface IconLinearDislikeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearDislike: React.FC<IconLinearDislikeProps> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M3 14.5a2.5 2.5 0 0 0 5 0v-8a2.5 2.5 0 0 0-5 0zm8.575 5.31-2.23-3.625c-.599-.973-.898-1.46-1.08-1.992a5 5 0 0 1-.14-.496C8 13.147 8 12.577 8 11.434V8a4 4 0 0 1 4-4h2.91a5 5 0 0 1 4.472 2.764L20.53 9.06c1.135 2.27-.515 4.939-3.052 4.939h-.69A2.82 2.82 0 0 0 14 17.25l.243 1.58a1.45 1.45 0 0 1-2.668.98Z"/>
    </svg>
  );
};
