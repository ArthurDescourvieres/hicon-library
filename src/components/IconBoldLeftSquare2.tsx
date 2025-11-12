import React from 'react';

export interface IconBoldLeftSquare2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLeftSquare2: React.FC<IconBoldLeftSquare2Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M18.939 20.045C17.625 21 15.749 21 12 21s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 17.625 3 15.749 3 12s0-5.625.955-6.939A5 5 0 0 1 5.06 3.955C6.375 3 8.251 3 12 3s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 6.375 21 8.251 21 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106M13.472 6.467a.75.75 0 0 1 1.056 1.066L12.765 9.28c-.716.71-1.206 1.197-1.538 1.61-.323.402-.434.66-.463.891a1.7 1.7 0 0 0 0 .438c.03.23.14.489.463.89.332.414.822.902 1.538 1.611l1.763 1.747a.75.75 0 0 1-1.056 1.066l-1.795-1.78c-.676-.669-1.228-1.217-1.62-1.704-.407-.508-.702-1.023-.781-1.64a3.2 3.2 0 0 1 0-.817c.079-.618.374-1.133.781-1.64.392-.488.944-1.036 1.62-1.706z" clip-rule="evenodd"/>
    </svg>
  );
};
