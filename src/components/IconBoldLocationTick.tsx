import React from 'react';

export interface IconBoldLocationTickProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLocationTick: React.FC<IconBoldLocationTickProps> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M14.78 19.7C17.09 16.756 20 12.477 20 9.61 20 4.854 16.418 1 12 1S4 4.854 4 9.609c0 2.867 2.91 7.146 5.22 10.092 1.204 1.536 1.807 2.305 2.78 2.305s1.576-.769 2.78-2.305m.804-11.23a.75.75 0 1 0-1.168-.94l-2.021 2.508c-.416.515-.678.838-.896 1.041a1 1 0 0 1-.205.157c-.028.014-.038.014-.043.014h-.002c-.005 0-.015 0-.043-.014A1 1 0 0 1 11 11.08c-.218-.203-.48-.526-.896-1.04l-.521-.648a.75.75 0 0 0-1.168.941l.554.688c.373.462.701.87 1.007 1.155.328.307.735.575 1.273.575s.945-.268 1.273-.575c.306-.285.634-.693 1.007-1.155z" clip-rule="evenodd"/>
    </svg>
  );
};
