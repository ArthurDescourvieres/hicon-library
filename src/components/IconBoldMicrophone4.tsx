import React from 'react';

export interface IconBoldMicrophone4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMicrophone4: React.FC<IconBoldMicrophone4Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M7.25 6a4.75 4.75 0 0 1 9.5 0v4a4.75 4.75 0 1 1-9.5 0zm3.487 4.711.235-.078a3.25 3.25 0 0 1 2.056 0l.235.079a.75.75 0 0 0 .474-1.424l-.235-.078a4.75 4.75 0 0 0-3.004 0l-.235.078a.75.75 0 0 0 .474 1.423" clip-rule="evenodd"/><path fill="currentColor" d="M4 9.25a.75.75 0 0 1 .75.75 7.25 7.25 0 1 0 14.5 0 .75.75 0 0 1 1.5 0 8.75 8.75 0 0 1-8 8.718v2.235q.325.043.645.123l.787.196a.75.75 0 0 1-.364 1.456l-.787-.197a4.25 4.25 0 0 0-2.062 0l-.787.197a.75.75 0 0 1-.364-1.456l.787-.196q.32-.081.645-.123v-2.235a8.75 8.75 0 0 1-8-8.718.75.75 0 0 1 .75-.75"/>
    </svg>
  );
};
