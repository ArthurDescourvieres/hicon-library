import React from 'react';

export interface IconBoldDownCircle1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDownCircle1: React.FC<IconBoldDownCircle1Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m.75-14a.75.75 0 0 0-1.5 0v6.936l-.043-.034c-.323-.26-.707-.645-1.276-1.22l-1.398-1.41a.75.75 0 1 0-1.066 1.056l1.429 1.441c.531.536.974.983 1.371 1.302.417.335.854.59 1.388.657a2.7 2.7 0 0 0 .69 0c.534-.068.971-.322 1.388-.657.397-.319.84-.766 1.371-1.302l1.429-1.441a.75.75 0 0 0-1.066-1.056l-1.398 1.41c-.57.575-.953.96-1.276 1.22l-.043.034z" clip-rule="evenodd"/>
    </svg>
  );
};
