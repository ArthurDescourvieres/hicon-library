import React from 'react';

export interface IconBoldCrop2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldCrop2: React.FC<IconBoldCrop2Props> = ({
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
      <path fill="currentColor" d="M4.568 2a.75.75 0 1 0-1.5 0v.818a.25.25 0 0 1-.25.25H2a.75.75 0 0 0 0 1.5h.818a1.75 1.75 0 0 0 1.75-1.75zm16.614 17.432a1.75 1.75 0 0 0-1.75 1.75V22a.75.75 0 0 0 1.5 0v-.818a.25.25 0 0 1 .25-.25H22a.75.75 0 0 0 0-1.5zM3.818 5.11v5.072c0 4.714 0 7.07 1.465 8.535 1.464 1.465 3.821 1.465 8.535 1.465h5.072a2.5 2.5 0 0 1 1.292-1.292v-5.072c0-4.714 0-7.07-1.465-8.535-1.464-1.465-3.821-1.465-8.535-1.465H5.11A2.5 2.5 0 0 1 3.818 5.11"/>
    </svg>
  );
};
