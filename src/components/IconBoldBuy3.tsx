import React from 'react';

export interface IconBoldBuy3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldBuy3: React.FC<IconBoldBuy3Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M1.728 1.818a.75.75 0 1 0-1.456.364L1.324 6.39l.979 4.084c.416 1.737.744 3.103 1.132 4.165.4 1.09.888 1.935 1.673 2.584q.102.084.207.163c.813.612 1.75.89 2.902 1.024 1.123.13 2.528.13 4.314.13h.594c1.545 0 2.761 0 3.74-.098 1.004-.102 1.83-.312 2.573-.778q.53-.332.977-.77c.626-.614 1.023-1.368 1.356-2.32.324-.93.608-2.113.968-3.616l.02-.087c.218-.906.397-1.652.466-2.257.072-.628.042-1.226-.27-1.772a2.8 2.8 0 0 0-.498-.63c-.458-.432-1.033-.6-1.66-.677-.604-.073-1.372-.073-2.303-.073H2.638zM9.25 14a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="currentColor" d="M9.421 22a1.053 1.053 0 1 0 0-2.105 1.053 1.053 0 0 0 0 2.105m6.316 0a1.053 1.053 0 1 0 0-2.105 1.053 1.053 0 0 0 0 2.105"/>
    </svg>
  );
};
