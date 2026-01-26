import React from 'react';

export interface IconBoldSituation2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSituation2: React.FC<IconBoldSituation2Props> = ({
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
      <g fill="currentColor" clip-path="url(#a)"><path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path fill-rule="evenodd" d="M12 .25a.75.75 0 0 1 .75.75v3.25c1.366.004 2.264.033 3.027.281a5.75 5.75 0 0 1 3.692 3.692c.247.763.277 1.66.28 3.027H23a.75.75 0 0 1 0 1.5h-3.25c-.004 1.366-.034 2.264-.281 3.027a5.75 5.75 0 0 1-3.692 3.692c-.763.247-1.66.277-3.027.28V23a.75.75 0 0 1-1.5 0v-3.25c-1.366-.004-2.264-.034-3.027-.281a5.75 5.75 0 0 1-3.692-3.692c-.248-.763-.277-1.66-.28-3.027H1a.75.75 0 0 1 0-1.5h3.25c.004-1.366.033-2.264.281-3.027a5.75 5.75 0 0 1 3.692-3.692c.763-.248 1.66-.277 3.027-.28V1A.75.75 0 0 1 12 .25M9.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
};
