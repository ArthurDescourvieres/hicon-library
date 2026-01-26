import React from 'react';

export interface IconBoldProfileRemove2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldProfileRemove2: React.FC<IconBoldProfileRemove2Props> = ({
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
      <path fill="currentColor" d="M15 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM6 6.75a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"/><path fill="currentColor" d="M3 17.75A4.75 4.75 0 0 1 7.75 13h6a4.75 4.75 0 0 1 4.417 3H15a2 2 0 1 0 0 4h2.934a4.75 4.75 0 0 1-4.184 2.5h-6A4.75 4.75 0 0 1 3 17.75"/>
    </svg>
  );
};
