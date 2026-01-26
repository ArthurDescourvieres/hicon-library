import React from 'react';

export interface IconLinearMessage18Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearMessage18: React.FC<IconLinearMessage18Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M4.04 7.133C4.775 7 5.75 7 7.222 7h1.556c2.178 0 3.267 0 4.099.43a3.9 3.9 0 0 1 1.7 1.722C15 9.996 15 11.1 15 13.307v2.128c0 .22 0 .33-.004.424a3.94 3.94 0 0 1-2.248 3.39M4.04 7.133a3.2 3.2 0 0 0-.917.297 3.9 3.9 0 0 0-1.7 1.722C1 9.996 1 11.1 1 13.307v3.334c0 1.642 1.313 2.973 2.934 2.973h.468c.606 0 1.02.62.795 1.19-.318.806.597 1.534 1.293 1.03l2.03-1.47.042-.03a3.85 3.85 0 0 1 2.215-.72h.062c.243 0 .364 0 .456-.004a3.8 3.8 0 0 0 1.453-.361M4.04 7.133c.056-1.051.189-1.783.505-2.403A5 5 0 0 1 6.73 2.545C7.8 2 9.2 2 12 2h2c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 5.8 22 7.2 22 10v4.228A3.77 3.77 0 0 1 18.228 18h-.601c-.78 0-1.312.787-1.023 1.51.409 1.021-.768 1.945-1.662 1.305l-2.194-1.566"/><path fill="currentColor" d="M6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
};
