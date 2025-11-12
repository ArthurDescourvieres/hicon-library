import React from 'react';

export interface IconBoldUp1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldUp1: React.FC<IconBoldUp1Props> = ({
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
      <path fill="#2D264B" d="M12.408 3.276a3.2 3.2 0 0 0-.816 0c-.618.079-1.133.374-1.64.781-.488.392-1.036.944-1.706 1.62L6.467 7.472a.75.75 0 0 0 1.066 1.056L9.28 6.765c.71-.715 1.197-1.206 1.61-1.538q.201-.161.36-.258V20a.75.75 0 0 0 1.5 0V4.97q.159.096.36.257c.413.332.9.822 1.61 1.538l1.747 1.763a.75.75 0 0 0 1.066-1.056l-1.78-1.795c-.669-.676-1.217-1.228-1.704-1.62-.508-.407-1.023-.702-1.64-.781"/>
    </svg>
  );
};
