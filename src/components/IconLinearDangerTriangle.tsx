import React from 'react';

export interface IconLinearDangerTriangleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearDangerTriangle: React.FC<IconLinearDangerTriangleProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M12 7v6m0 8c-4.547 0-6.82 0-8.135-.955a5 5 0 0 1-2.034-3.522c-.17-1.616.967-3.585 3.24-7.523s3.411-5.907 4.895-6.568a5 5 0 0 1 4.068 0c1.484.661 2.62 2.63 4.894 6.568s3.41 5.907 3.24 7.523a5 5 0 0 1-2.033 3.522C18.821 21 16.547 21 12 21Z"/><path fill="#414141" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
