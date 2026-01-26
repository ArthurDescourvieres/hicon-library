import React from 'react';

export interface IconLinearTimeCircle1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTimeCircle1: React.FC<IconLinearTimeCircle1Props> = ({
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
      <path fill="currentColor" d="M12.75 8.25a.75.75 0 0 0-1.5 0zm-3.296 6.607a.75.75 0 0 0 1.092 1.029L10 15.37zM2.531 2.664a.75.75 0 1 0 .938 1.172L3 3.25zm3.438-.828A.75.75 0 1 0 5.03.664l.469.586zm14.563 2a.75.75 0 1 0 .936-1.172L21 3.25zM18.968.664a.75.75 0 0 0-.936 1.172l.468-.586zm-7.513 13.164-.546-.515zM12 8.25h-.75v4.206h1.5V8.25zm-2 7.121.546.515L12 14.342l-.546-.514-.546-.515-1.455 1.544zM3 3.25l.469.586 2.5-2L5.5 1.25 5.031.664l-2.5 2zm18 0 .468-.586-2.5-2-.468.586-.468.586 2.5 2zm1 9h-.75A9.25 9.25 0 0 1 12 21.5V23c5.937 0 10.75-4.813 10.75-10.75zm-10 10v-.75a9.25 9.25 0 0 1-9.25-9.25h-1.5C1.25 18.187 6.063 23 12 23zm-10-10h.75A9.25 9.25 0 0 1 12 3V1.5C6.063 1.5 1.25 6.313 1.25 12.25zm10-10V3a9.25 9.25 0 0 1 9.25 9.25h1.5C22.75 6.313 17.937 1.5 12 1.5zm0 10.206h-.75c0 .319-.122.625-.34.857l.545.515.546.514a2.75 2.75 0 0 0 .749-1.886z"/>
    </svg>
  );
};
