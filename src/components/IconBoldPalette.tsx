import React from 'react';

export interface IconBoldPaletteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPalette: React.FC<IconBoldPaletteProps> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M11.812 2h.384a9.35 9.35 0 0 1 9.2 7.678 2.338 2.338 0 0 1-2.718 2.718L16.5 12c-2.66-.484-4.984 1.84-4.5 4.5l.396 2.178a2.338 2.338 0 0 1-2.718 2.718A9.35 9.35 0 0 1 2 12.196v-.384C2 6.392 6.393 2 11.812 2M9 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
