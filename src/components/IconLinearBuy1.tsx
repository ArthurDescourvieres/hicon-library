import React from 'react';

export interface IconLinearBuy1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearBuy1: React.FC<IconLinearBuy1Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M14.47 3.47a.75.75 0 0 1 1.06 0l3.78 3.78H22a.75.75 0 0 1 0 1.5h-.544c-.227.856-.52 1.843-.86 2.991l-1.025 3.456c-.407 1.373-.657 2.215-1.094 2.9a5.75 5.75 0 0 1-3.255 2.429c-.78.224-1.658.224-3.09.224h-.263c-1.432 0-2.31 0-3.091-.224a5.75 5.75 0 0 1-3.255-2.43c-.437-.684-.687-1.526-1.094-2.9l-1.025-3.454c-.34-1.149-.633-2.136-.86-2.992H2a.75.75 0 0 1 0-1.5h2.932l3.78-3.78a.75.75 0 1 1 1.061 1.06l-2.72 2.72H17.19l-2.72-2.72a.75.75 0 0 1 0-1.06M10.75 12a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/>
    </svg>
  );
};
