import React from 'react';

export interface IconBoldRight1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldRight1: React.FC<IconBoldRight1Props> = ({
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
      <path fill="#2D264B" d="M16.528 6.467a.75.75 0 0 0-1.056 1.066l1.763 1.747c.716.71 1.206 1.197 1.538 1.61q.16.201.258.36H4a.75.75 0 0 0 0 1.5h15.03a4 4 0 0 1-.257.36c-.332.413-.822.9-1.538 1.61l-1.763 1.747a.75.75 0 0 0 1.056 1.066l1.795-1.78c.676-.669 1.228-1.217 1.62-1.704.407-.508.702-1.023.781-1.64a3.2 3.2 0 0 0 0-.817c-.079-.618-.374-1.133-.781-1.64-.392-.488-.944-1.036-1.62-1.706z"/>
    </svg>
  );
};
