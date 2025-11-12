import React from 'react';

export interface IconBoldSend4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSend4: React.FC<IconBoldSend4Props> = ({
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
      <path fill="#2D264B" d="M8.127 5.014c1.821-2.685 5.778-2.685 7.599 0l5.229 7.71a5.25 5.25 0 0 1 .17 5.606c-2.048 3.475-7.133 3.438-9.074-.12a.141.141 0 0 0-.248 0c-1.942 3.558-7.027 3.595-9.075.12a5.25 5.25 0 0 1 .17-5.606z"/>
    </svg>
  );
};
