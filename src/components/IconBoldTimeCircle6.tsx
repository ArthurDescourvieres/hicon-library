import React from 'react';

export interface IconBoldTimeCircle6Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTimeCircle6: React.FC<IconBoldTimeCircle6Props> = ({
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
      <path fill="currentColor" d="M5.969 1.836A.75.75 0 1 0 5.03.664l-2.5 2a.75.75 0 1 0 .938 1.172zm13-1.172a.75.75 0 0 0-.937 1.172l2.5 2a.75.75 0 1 0 .936-1.172z"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M12.75 8a.75.75 0 0 0-1.5 0v3.5a2.25 2.25 0 0 0 2.25 2.25H15a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"/>
    </svg>
  );
};
