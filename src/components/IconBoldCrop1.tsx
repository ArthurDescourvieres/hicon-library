import React from 'react';

export interface IconBoldCrop1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldCrop1: React.FC<IconBoldCrop1Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2 3.818h.818a1 1 0 0 0 1-1V2M22 20.182h-.818a1 1 0 0 0-1 1V22"/><path fill="currentColor" d="M3.818 10.182V5.11A2.5 2.5 0 0 0 5.11 3.818h5.072c4.134 0 6.455 0 7.952.988L20.97 1.97a.75.75 0 0 1 1.06 1.06l-2.836 2.837c.988 1.496.988 3.817.988 7.951v5.072a2.5 2.5 0 0 0-1.292 1.292h-5.072c-4.134 0-6.455 0-7.951-.988L19.194 5.867a3.7 3.7 0 0 0-1.06-1.061L4.806 18.134c-.988-1.497-.988-3.818-.988-7.952"/>
    </svg>
  );
};
