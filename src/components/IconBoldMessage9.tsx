import React from 'react';

export interface IconBoldMessage9Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage9: React.FC<IconBoldMessage9Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M20.455 4.73C21 5.8 21 7.2 21 10v2.699c0 .28 0 .42-.006.537a5 5 0 0 1-4.758 4.758c-.118.006-.274.006-.586.006h-.08a5 5 0 0 0-2.848.913l-.053.038-2.61 1.864c-.895.64-2.072-.284-1.663-1.305A1.1 1.1 0 0 0 7.373 18h-.601A3.77 3.77 0 0 1 3 14.228V10c0-2.8 0-4.2.545-5.27A5 5 0 0 1 5.73 2.545C6.8 2 8.2 2 11 2h2c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
