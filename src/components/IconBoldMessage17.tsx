import React from 'react';

export interface IconBoldMessage17Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage17: React.FC<IconBoldMessage17Props> = ({
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
      <path fill="currentColor" d="M5.15 6.014C5.706 6 6.35 6 7.111 6H8.89c2.49 0 3.734 0 4.685.487a4.46 4.46 0 0 1 1.942 1.952c.484.956.484 2.207.484 4.709v2.411c0 .25 0 .375-.005.48a4.47 4.47 0 0 1-1.883 3.445l1.83 1.305c.895.639 2.071-.283 1.663-1.303a1.1 1.1 0 0 1 1.022-1.508h.602A3.77 3.77 0 0 0 23 14.21V9.99c0-2.796 0-4.195-.544-5.263a5 5 0 0 0-2.186-2.182C19.2 2 17.8 2 15 2h-2c-2.8 0-4.2 0-5.27.544a5 5 0 0 0-2.185 2.182c-.19.374-.314.788-.395 1.288"/><path fill="currentColor" fill-rule="evenodd" d="M14.576 9.152C15 9.996 15 11.1 15 13.307v2.128c0 .22 0 .33-.004.424-.095 2.03-1.698 3.655-3.701 3.75-.092.005-.213.005-.456.005h-.062a3.85 3.85 0 0 0-2.215.72l-.041.03-2.031 1.47c-.696.504-1.61-.224-1.293-1.03.225-.57-.19-1.19-.795-1.19h-.468C2.314 19.614 1 18.283 1 16.641v-3.334c0-2.208 0-3.311.424-4.155a3.9 3.9 0 0 1 1.7-1.722C3.954 7 5.043 7 7.221 7h1.556c2.178 0 3.267 0 4.099.43a3.9 3.9 0 0 1 1.7 1.722M5 13.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
