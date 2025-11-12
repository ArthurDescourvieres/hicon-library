import React from 'react';

export interface IconBoldFlashDisk1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldFlashDisk1: React.FC<IconBoldFlashDisk1Props> = ({
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
      <path fill="#2D264B" d="M18 8.131C17.195 8 16.134 8 14.5 8h-5C7.866 8 6.805 8 6 8.131a4 4 0 0 0-.913.25 5 5 0 0 0-2.706 2.706c-.205.494-.225 1.098-.225 1.098l.459.074 2.384.357a49.3 49.3 0 0 0 14.987-.057l1.897-.3s-.085-.74-.264-1.172a5 5 0 0 0-2.706-2.706A4 4 0 0 0 18 8.13m3.991 5.63-1.77.28a50.8 50.8 0 0 1-15.444.06l-2.396-.36-.37-.059C2 14.198 2 14.796 2 15.5c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706C6.005 23 7.17 23 9.5 23h5c2.33 0 3.495 0 4.413-.38a5 5 0 0 0 2.706-2.707C22 18.995 22 17.83 22 15.5c0-.668 0-1.24-.009-1.74"/><path fill="#2D264B" fill-rule="evenodd" d="M14 1h-4c-1.886 0-2.828 0-3.414.586S6 3.114 6 5v2.373c.848-.123 1.929-.123 3.421-.123h5.158c1.492 0 2.573 0 3.421.123V5c0-1.886 0-2.828-.586-3.414S15.886 1 14 1m-4 2.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m4 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
    </svg>
  );
};
