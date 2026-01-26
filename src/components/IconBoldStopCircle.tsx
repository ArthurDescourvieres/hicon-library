import React from 'react';

export interface IconBoldStopCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldStopCircle: React.FC<IconBoldStopCircleProps> = ({
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
      <path fill="currentColor" d="M10.418 8.827c.262-.07.604-.077 1.582-.077s1.32.006 1.582.077a2.25 2.25 0 0 1 1.591 1.59c.07.263.077.605.077 1.583s-.006 1.32-.077 1.582a2.25 2.25 0 0 1-1.59 1.591c-.263.07-.605.077-1.583.077s-1.32-.006-1.582-.077a2.25 2.25 0 0 1-1.591-1.59c-.07-.263-.077-.605-.077-1.583s.006-1.32.077-1.582a2.25 2.25 0 0 1 1.59-1.591"/><path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m10.634-4.75c-.818 0-1.376 0-1.855.128a3.75 3.75 0 0 0-2.651 2.651c-.128.48-.128 1.037-.128 1.855v.232c0 .818 0 1.376.128 1.855a3.75 3.75 0 0 0 2.651 2.651c.48.128 1.037.128 1.855.128h.232c.818 0 1.376 0 1.855-.128a3.75 3.75 0 0 0 2.651-2.651c.128-.48.128-1.037.128-1.855v-.232c0-.818 0-1.376-.128-1.855a3.75 3.75 0 0 0-2.651-2.651c-.48-.128-1.037-.128-1.855-.128z" clip-rule="evenodd"/>
    </svg>
  );
};
