import React from 'react';

export interface IconBoldSend3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSend3: React.FC<IconBoldSend3Props> = ({
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
      <path fill="#2D264B" d="M15.654 2.334c3.187-.611 5.985 2.186 5.373 5.373l-1.754 9.15a5.25 5.25 0 0 1-3.843 4.084c-3.906 1.009-7.475-2.613-6.332-6.502a.141.141 0 0 0-.175-.176c-3.89 1.144-7.511-2.426-6.502-6.331a5.25 5.25 0 0 1 4.084-3.843z"/>
    </svg>
  );
};
