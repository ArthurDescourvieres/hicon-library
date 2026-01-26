import React from 'react';

export interface IconBoldUpCircle2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldUpCircle2: React.FC<IconBoldUpCircle2Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m5.533 11.472a.75.75 0 0 1-1.066 1.056l-1.747-1.763c-.71-.716-1.197-1.206-1.61-1.538-.402-.323-.66-.434-.891-.463a1.7 1.7 0 0 0-.437 0c-.232.03-.49.14-.891.463-.414.332-.902.822-1.611 1.538l-1.747 1.763a.75.75 0 1 1-1.066-1.056l1.78-1.795c.67-.676 1.217-1.228 1.704-1.62.508-.407 1.023-.702 1.64-.781q.41-.053.817 0c.618.079 1.133.374 1.64.781.488.392 1.036.944 1.706 1.62z" clip-rule="evenodd"/>
    </svg>
  );
};
