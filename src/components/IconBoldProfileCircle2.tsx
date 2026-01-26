import React from 'react';

export interface IconBoldProfileCircle2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldProfileCircle2: React.FC<IconBoldProfileCircle2Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 3.049-1.27 5.802-3.308 7.757A10.72 10.72 0 0 1 12 22.75c-2.888 0-5.512-1.14-7.442-2.993A10.72 10.72 0 0 1 1.25 12m16.833 6.968A3.25 3.25 0 0 0 15 16.75H9c-1.434 0-2.652.93-3.083 2.218A9.2 9.2 0 0 0 12 21.25c2.33 0 4.456-.86 6.083-2.282M12 4.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5" clip-rule="evenodd"/>
    </svg>
  );
};
