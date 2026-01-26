import React from 'react';

export interface IconBoldFilter2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldFilter2: React.FC<IconBoldFilter2Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M2.25 6.373c0-2.297 1.911-4.123 4.222-4.123h11.112c2.28 0 4.166 1.8 4.166 4.068a4.03 4.03 0 0 1-1.483 3.112l-3.52 2.894a4.05 4.05 0 0 0-1.497 3.128v1.73a3.4 3.4 0 0 1-1.45 2.773l-1.941 1.371c-1.473 1.041-3.609.049-3.609-1.813v-4.177c0-1.143-.494-2.24-1.37-3.02L3.627 9.42A4.08 4.08 0 0 1 2.25 6.373M8 6.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
