import React from 'react';

export interface IconBoldSend5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSend5: React.FC<IconBoldSend5Props> = ({
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
      <path fill="currentColor" d="M2.334 7.707c-.611-3.186 2.187-5.984 5.373-5.373l9.15 1.755a5.25 5.25 0 0 1 4.084 3.843c1.009 3.905-2.613 7.475-6.502 6.331a.141.141 0 0 0-.176.176c1.144 3.889-2.425 7.51-6.331 6.502a5.25 5.25 0 0 1-3.843-4.085z"/>
    </svg>
  );
};
