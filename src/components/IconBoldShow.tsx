import React from 'react';

export interface IconBoldShowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldShow: React.FC<IconBoldShowProps> = ({
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
      <path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/><path fill="currentColor" fill-rule="evenodd" d="M6.352 5.596C7.923 4.309 9.859 3.25 12 3.25s4.077 1.059 5.648 2.346c1.58 1.293 2.872 2.883 3.74 4.092l.072.1c.523.726.953 1.324.953 2.212s-.43 1.486-.953 2.212l-.071.1c-.869 1.21-2.16 2.798-3.74 4.092C16.076 19.691 14.14 20.75 12 20.75s-4.077-1.059-5.648-2.346c-1.58-1.294-2.872-2.883-3.74-4.092l-.072-.1c-.523-.726-.953-1.324-.953-2.212s.43-1.486.953-2.212l.071-.1c.869-1.21 2.16-2.799 3.74-4.092M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"/>
    </svg>
  );
};
