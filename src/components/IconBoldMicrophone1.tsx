import React from 'react';

export interface IconBoldMicrophone1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMicrophone1: React.FC<IconBoldMicrophone1Props> = ({
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
      <path fill="currentColor" d="M12 1.25A4.75 4.75 0 0 0 7.25 6v4a4.75 4.75 0 1 0 9.5 0V6A4.75 4.75 0 0 0 12 1.25"/><path fill="currentColor" d="M4.75 10a.75.75 0 0 0-1.5 0 8.75 8.75 0 0 0 8 8.718v2.235q-.325.043-.645.123l-.787.196a.75.75 0 0 0 .364 1.456l.787-.197a4.25 4.25 0 0 1 2.062 0l.787.197a.75.75 0 0 0 .364-1.456l-.787-.196a6 6 0 0 0-.645-.123v-2.235a8.75 8.75 0 0 0 8-8.718.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0"/>
    </svg>
  );
};
