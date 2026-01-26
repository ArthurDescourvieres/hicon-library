import React from 'react';

export interface IconBoldSadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSad: React.FC<IconBoldSadProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9.272 15.638c-.777.528-1.337 1.188-1.606 1.707a.75.75 0 1 1-1.332-.69c.398-.767 1.138-1.607 2.094-2.257.963-.655 2.191-1.148 3.572-1.148 1.38 0 2.608.493 3.572 1.148.956.65 1.696 1.49 2.094 2.257a.75.75 0 1 1-1.332.69c-.269-.519-.829-1.179-1.606-1.707-.77-.524-1.709-.888-2.728-.888s-1.958.364-2.728.888M9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
