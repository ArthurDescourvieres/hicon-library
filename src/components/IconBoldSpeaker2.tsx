import React from 'react';

export interface IconBoldSpeaker2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSpeaker2: React.FC<IconBoldSpeaker2Props> = ({
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
      <g fill="currentColor" fill-rule="evenodd" clip-path="url(#a)" clip-rule="evenodd"><path d="M12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path d="M10.943.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494C1.04 2.83.634 3.97.44 5.414.25 6.825.25 8.634.25 10.943v2.114c0 2.309 0 4.118.19 5.53.194 1.444.6 2.584 1.494 3.479.895.895 2.035 1.3 3.48 1.494 1.411.19 3.22.19 5.529.19h2.114c2.309 0 4.118 0 5.53-.19 1.444-.194 2.584-.6 3.479-1.494.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-2.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19zM5.25 12a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0M4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m14 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
};
