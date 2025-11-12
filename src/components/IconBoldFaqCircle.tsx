import React from 'react';

export interface IconBoldFaqCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldFaqCircle: React.FC<IconBoldFaqCircleProps> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.441-4.339c-.972-1.296-3-.967-3.512.57l-.335 1.006a.75.75 0 1 1-1.424-.474l.336-1.006c.895-2.685 4.437-3.26 6.134-.996a3.51 3.51 0 0 1-.166 4.416l-.919 1.05a3.73 3.73 0 0 0-.923 2.456V15a.75.75 0 0 1-1.5 0v-.317c0-1.267.46-2.49 1.294-3.444l.92-1.05a2.01 2.01 0 0 0 .095-2.528M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
