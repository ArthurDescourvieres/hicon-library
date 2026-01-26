import React from 'react';

export interface IconBoldTimeCircle1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTimeCircle1: React.FC<IconBoldTimeCircle1Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M12 1.5C6.063 1.5 1.25 6.313 1.25 12.25S6.063 23 12 23s10.75-4.813 10.75-10.75S17.937 1.5 12 1.5m.75 6.75a.75.75 0 0 0-1.5 0v4.206c0 .319-.122.625-.34.857l-1.456 1.544a.75.75 0 1 0 1.092 1.029L12 14.342a2.75 2.75 0 0 0 .749-1.886z" clip-rule="evenodd"/><path fill="currentColor" d="M5.969 1.836A.75.75 0 1 0 5.03.664l-2.5 2a.75.75 0 1 0 .938 1.172zm13-1.172a.75.75 0 0 0-.937 1.172l2.5 2a.75.75 0 1 0 .936-1.172z"/>
    </svg>
  );
};
