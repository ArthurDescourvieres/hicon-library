import React from 'react';

export interface IconBoldDangerTriangleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDangerTriangle: React.FC<IconBoldDangerTriangleProps> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M5.072 9c2.273-3.938 3.41-5.907 4.894-6.568a5 5 0 0 1 4.068 0c1.484.661 2.62 2.63 4.894 6.568s3.41 5.907 3.24 7.523a5 5 0 0 1-2.033 3.522C18.821 21 16.547 21 12 21s-6.82 0-8.135-.955a5 5 0 0 1-2.034-3.522c-.17-1.616.967-3.585 3.24-7.523M12 6.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
