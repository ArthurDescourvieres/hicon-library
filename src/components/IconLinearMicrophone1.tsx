import React from 'react';

export interface IconLinearMicrophone1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMicrophone1: React.FC<IconLinearMicrophone1Props> = ({
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
      <path fill="currentColor" d="M20.75 10a.75.75 0 0 0-1.5 0zm-16 0a.75.75 0 0 0-1.5 0zm5.068 11.272a.75.75 0 0 0 .364 1.456L10 22zm.97.531-.183-.727zm2.425 0 .182-.727zm.605.925a.75.75 0 0 0 .364-1.456L14 22zM12 21.654v.75zM16 6h-.75v4h1.5V6zm-8 4h.75V6h-1.5v4zm4 4v-.75A3.25 3.25 0 0 1 8.75 10h-1.5A4.75 4.75 0 0 0 12 14.75zm4-4h-.75A3.25 3.25 0 0 1 12 13.25v1.5A4.75 4.75 0 0 0 16.75 10zm-4-8v.75A3.25 3.25 0 0 1 15.25 6h1.5A4.75 4.75 0 0 0 12 1.25zm0 0v-.75A4.75 4.75 0 0 0 7.25 6h1.5A3.25 3.25 0 0 1 12 2.75zm8 8h-.75A7.25 7.25 0 0 1 12 17.25v1.5A8.75 8.75 0 0 0 20.75 10zm-8 8v-.75A7.25 7.25 0 0 1 4.75 10h-1.5A8.75 8.75 0 0 0 12 18.75zm0 0h-.75v3h1.5v-3zm-2 4 .182.728.787-.197-.182-.728-.182-.727-.787.196zm3.213-.197-.182.728.787.197L14 22l.182-.728-.787-.196zm-2.426 0 .182.728A4.3 4.3 0 0 1 12 22.404v-1.5a5.7 5.7 0 0 0-1.395.172zm1.213-.15v.75c.346 0 .692.043 1.03.128l.183-.728.182-.727A5.8 5.8 0 0 0 12 20.904zM12 21h-.75v.654h1.5V21z"/>
    </svg>
  );
};
