import React from 'react';

export interface IconBoldFolderCross2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldFolderCross2: React.FC<IconBoldFolderCross2Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M3.955 6.061C3 7.375 3 9.251 3 13s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13s0-5.625-.955-6.939a5 5 0 0 0-1.176-1.155C17.56 4 15.684 4 12 4s-5.558 0-6.87.906l-.069.049A5 5 0 0 0 3.955 6.06m6.575 4.409a.75.75 0 1 0-1.06 1.06l1.59 1.591-1.59 1.591a.75.75 0 0 0 1.06 1.061l1.591-1.591 1.591 1.591a.75.75 0 0 0 1.061-1.06l-1.591-1.592 1.591-1.59a.75.75 0 1 0-1.06-1.061l-1.592 1.59z" clip-rule="evenodd"/><path fill="#2D264B" d="M12 1c1.861 0 2.792 0 3.545.245a5 5 0 0 1 2.974 2.616c-.62-.266-1.317-.41-2.117-.494-1.132-.117-2.553-.117-4.36-.117h-.085c-1.806 0-3.227 0-4.359.117-.8.083-1.497.228-2.118.494a5 5 0 0 1 2.975-2.616C9.208 1 10.139 1 12 1"/>
    </svg>
  );
};
