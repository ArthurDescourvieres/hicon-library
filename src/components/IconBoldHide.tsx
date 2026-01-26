import React from 'react';

export interface IconBoldHideProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldHide: React.FC<IconBoldHideProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M22.469 4.586a.75.75 0 1 0-.937-1.172l-3.326 2.66a16 16 0 0 0-.558-.478C16.077 4.309 14.141 3.25 12 3.25S7.923 4.309 6.352 5.596c-1.58 1.293-2.872 2.883-3.74 4.092l-.072.1c-.523.726-.953 1.324-.953 2.212s.43 1.486.953 2.212l.071.1a25 25 0 0 0 2.101 2.558l-3.18 2.544a.75.75 0 1 0 .937 1.172zM8.661 13.71l1.213-.97a2.25 2.25 0 0 1 3.314-2.651l1.212-.97a3.75 3.75 0 0 0-5.739 4.591" clip-rule="evenodd"/><path fill="currentColor" d="m20.695 8.765-5.028 4.022A3.75 3.75 0 0 1 12 15.75h-.036l-4.416 3.532c1.32.858 2.827 1.468 4.452 1.468 2.141 0 4.077-1.059 5.648-2.346 1.58-1.293 2.872-2.883 3.74-4.092l.072-.1c.523-.726.953-1.324.953-2.212s-.43-1.486-.953-2.212l-.071-.1q-.312-.437-.694-.923"/>
    </svg>
  );
};
