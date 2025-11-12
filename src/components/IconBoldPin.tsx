import React from 'react';

export interface IconBoldPinProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPin: React.FC<IconBoldPinProps> = ({
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
      <path fill="#2D264B" d="M8.48 3.432a5.75 5.75 0 1 1 9.96 5.75l-.108.187a7.75 7.75 0 0 1 .42 7.199c-.157.347-.377.728-.758 1.387l-.039.068a1.75 1.75 0 0 1-2.288.806 3 3 0 0 1-.24-.128l-6.191-3.575-3.625 6.279a.75.75 0 0 1-1.3-.75l3.625-6.279-6.19-3.574a3 3 0 0 1-.233-.144A1.75 1.75 0 0 1 .94 8.513c.036-.08.083-.161.129-.24l.039-.068c.38-.659.6-1.04.822-1.35A7.75 7.75 0 0 1 8.372 3.62z"/>
    </svg>
  );
};
