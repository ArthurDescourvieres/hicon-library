import React from 'react';

export interface IconBoldCallSilentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldCallSilent: React.FC<IconBoldCallSilentProps> = ({
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
      <path fill="#2D264B" d="M8.112 2.975a2.75 2.75 0 0 0-3.721 0c-.044.04-.09.086-.15.145l-.897.898A3.74 3.74 0 0 0 2.34 7.47a18.64 18.64 0 0 0 4.07 8.122L2.78 19.22a.75.75 0 1 0 1.06 1.06l16-16a.75.75 0 1 0-1.06-1.06l-7.686 7.685-.209-.21a2.01 2.01 0 0 1-.42-2.222A3.51 3.51 0 0 0 9.73 4.59L8.26 3.12a5 5 0 0 0-.148-.145M16.51 21.64a18.64 18.64 0 0 1-8.034-3.994l4.68-4.68.127.127a2.01 2.01 0 0 0 2.223.42 3.51 3.51 0 0 1 3.883.736l1.47 1.47c.06.06.105.105.145.148a2.75 2.75 0 0 1-.145 3.87l-.898.898a3.74 3.74 0 0 1-3.452 1.005"/>
    </svg>
  );
};
