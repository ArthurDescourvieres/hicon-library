import React from 'react';

export interface IconBoldSun2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSun2: React.FC<IconBoldSun2Props> = ({
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
      <path fill="currentColor" d="M12 .25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V1A.75.75 0 0 1 12 .25M3.692 2.692a.75.75 0 0 1 1.06 0l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.692 3.752a.75.75 0 0 1 0-1.06m16.617 0a.75.75 0 0 1 0 1.06l-1.415 1.414a.75.75 0 0 1-1.06-1.06l1.414-1.414a.75.75 0 0 1 1.06 0M6.25 11.75V11a5.75 5.75 0 1 1 11.5 0v.75zm-5-.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m-16 3a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m3 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"/>
    </svg>
  );
};
