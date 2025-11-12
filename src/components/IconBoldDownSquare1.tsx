import React from 'react';

export interface IconBoldDownSquare1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDownSquare1: React.FC<IconBoldDownSquare1Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M3.955 5.061C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06M12.75 8a.75.75 0 0 0-1.5 0v6.936l-.043-.034c-.323-.26-.707-.645-1.276-1.22l-1.398-1.41a.75.75 0 1 0-1.066 1.056l1.429 1.441c.531.536.974.983 1.371 1.302.417.335.854.59 1.388.657a2.7 2.7 0 0 0 .69 0c.534-.068.971-.322 1.388-.657.397-.319.84-.766 1.371-1.302l1.429-1.441a.75.75 0 0 0-1.066-1.056l-1.398 1.41c-.57.575-.953.96-1.276 1.22l-.043.034z" clip-rule="evenodd"/>
    </svg>
  );
};
