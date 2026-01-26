import React from 'react';

export interface IconBoldTimeCircle3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTimeCircle3: React.FC<IconBoldTimeCircle3Props> = ({
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
      <path fill="currentColor" d="M5.969 1.836A.75.75 0 1 0 5.03.664l-2.5 2a.75.75 0 1 0 .938 1.172zm13-1.172a.75.75 0 0 0-.937 1.172l2.5 2a.75.75 0 1 0 .936-1.172z"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M12.75 8a.75.75 0 0 0-1.5 0v2.726c0 .533 0 .987.037 1.364.04.402.125.774.331 1.13.206.357.486.617.813.852.308.22.702.448 1.164.715l.628.363a.75.75 0 0 0 .75-1.3l-.598-.345c-.5-.289-.83-.48-1.07-.652-.227-.163-.325-.275-.387-.383s-.11-.249-.138-.527c-.03-.295-.03-.674-.03-1.252z" clip-rule="evenodd"/>
    </svg>
  );
};
