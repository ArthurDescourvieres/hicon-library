import React from 'react';

export interface IconBoldHome4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldHome4: React.FC<IconBoldHome4Props> = ({
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
      <path fill="currentColor" d="M6.294 4.966c-2.667 1.937-4 2.906-4.524 4.337q-.063.172-.114.349c-.417 1.465.092 3.033 1.111 6.168s1.528 4.702 2.727 5.642q.144.114.297.216c.426.287.897.477 1.459.602v-4.46a4.75 4.75 0 1 1 9.5 0v4.46c.562-.125 1.033-.315 1.46-.602q.151-.102.296-.216c1.2-.94 1.708-2.507 2.727-5.642s1.528-4.703 1.11-6.168a5 5 0 0 0-.113-.35c-.523-1.43-1.857-2.399-4.524-4.336s-4-2.907-5.523-2.963a5 5 0 0 0-.366 0c-1.523.056-2.857 1.025-5.523 2.963"/><path fill="currentColor" fill-rule="evenodd" d="M15.25 22.473V17.82a3.25 3.25 0 1 0-6.5 0v4.653c.873.055 1.93.055 3.25.055s2.377 0 3.25-.055m-2.5-4.653a.75.75 0 1 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/>
    </svg>
  );
};
