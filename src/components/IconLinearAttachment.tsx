import React from 'react';

export interface IconLinearAttachmentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearAttachment: React.FC<IconLinearAttachmentProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m13.633 14.522.949-3.542a3.667 3.667 0 0 0-7.084-1.898l-2.372 8.854a3.667 3.667 0 0 0 6.404 3.243m-.49-11.148-.949 3.542a3.667 3.667 0 0 0 7.083 1.898l2.373-8.854a3.667 3.667 0 0 0-6.404-3.243"/>
    </svg>
  );
};
