import React from 'react';

export interface IconBoldSupportUserProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSupportUser: React.FC<IconBoldSupportUserProps> = ({
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
      <path fill="currentColor" d="M14.2 2c3.08 0 4.62 0 5.797.602A5.5 5.5 0 0 1 22.4 5.014c.6 1.18.6 2.726.6 5.816v1.307c0 1.864 0 2.797-.223 3.557a5.51 5.51 0 0 1-3.73 3.742c-.757.224-1.686.224-3.544.224h-.676a5.5 5.5 0 0 0-3.133 1.007l-.058.042-2.871 2.059c-.985.705-2.278-.314-1.83-1.44a1.215 1.215 0 0 0-1.124-1.668h-.663A4.156 4.156 0 0 1 1 15.497V10.83c0-3.09 0-4.636.6-5.816a5.5 5.5 0 0 1 2.403-2.412C5.179 2 6.72 2 9.8 2zm-3.749 9.366c-1.354 0-2.45 1.037-2.451 2.317S9.097 16 10.451 16h3.098C14.903 16 16 14.962 16 13.683s-1.098-2.317-2.451-2.317zM12 6c-1.354 0-2.451 1.038-2.451 2.317s1.097 2.317 2.451 2.317 2.451-1.037 2.451-2.317S13.354 6 12 6"/>
    </svg>
  );
};
