import React from 'react';

export interface IconBoldMinusCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMinusCircle: React.FC<IconBoldMinusCircleProps> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
