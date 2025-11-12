import React from 'react';

export interface IconBoldMessage15Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage15: React.FC<IconBoldMessage15Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M20.455 4.73C21 5.8 21 7.2 21 10v2.699c0 .28 0 .42-.006.537a5 5 0 0 1-4.758 4.758c-.118.006-.274.006-.586.006h-.08a5 5 0 0 0-2.848.913l-.053.038-2.61 1.864c-.895.64-2.072-.284-1.663-1.305A1.1 1.1 0 0 0 7.373 18h-.601A3.77 3.77 0 0 1 3 14.228V10c0-2.8 0-4.2.545-5.27A5 5 0 0 1 5.73 2.545C6.8 2 8.2 2 11 2h2c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185M8 7.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
