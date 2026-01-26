import React from 'react';

export interface IconBoldBuy2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldBuy2: React.FC<IconBoldBuy2Props> = ({
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
      <path fill="currentColor" d="M1.728 1.818a.75.75 0 0 0-1.456.364L1.324 6.39l.98 4.084c.415 1.737.743 3.103 1.132 4.165.398 1.09.887 1.935 1.672 2.584q.102.084.207.163c.813.612 1.75.89 2.902 1.024 1.123.13 2.529.13 4.314.13h.594c1.545 0 2.761 0 3.741-.098 1.003-.102 1.83-.312 2.572-.778q.53-.332.977-.77c.586-.575.972-1.274 1.292-2.143H17a.75.75 0 1 1 0-1.5h5.17q.181-.68.378-1.5H14a.75.75 0 1 1 0-1.5h8.907c.149-.633.265-1.176.318-1.637.072-.628.043-1.226-.27-1.772a2.8 2.8 0 0 0-.498-.63c-.458-.432-1.032-.6-1.66-.677-.604-.073-1.372-.073-2.303-.073H2.638zM9.421 22a1.053 1.053 0 1 0 0-2.105 1.053 1.053 0 0 0 0 2.105m6.316 0a1.053 1.053 0 1 0 0-2.105 1.053 1.053 0 0 0 0 2.105"/>
    </svg>
  );
};
