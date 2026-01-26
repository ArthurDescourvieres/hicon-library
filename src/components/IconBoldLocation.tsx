import React from 'react';

export interface IconBoldLocationProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLocation: React.FC<IconBoldLocationProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M14.78 19.7C17.09 16.756 20 12.477 20 9.61 20 4.854 16.418 1 12 1S4 4.854 4 9.609c0 2.867 2.91 7.146 5.22 10.092 1.204 1.536 1.807 2.305 2.78 2.305s1.576-.769 2.78-2.305M12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6" clip-rule="evenodd"/>
    </svg>
  );
};
