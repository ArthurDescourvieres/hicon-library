import React from 'react';

export interface IconLinearTimeCircle5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTimeCircle5: React.FC<IconLinearTimeCircle5Props> = ({
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
      <path fill="currentColor" d="M12.75 8a.75.75 0 0 0-1.5 0zM9 12.25a.75.75 0 0 0 0 1.5zM2.531 2.664a.75.75 0 1 0 .938 1.172L3 3.25zm3.438-.828A.75.75 0 1 0 5.03.664l.469.586zm14.563 2a.75.75 0 1 0 .936-1.172L21 3.25zM18.968.664a.75.75 0 0 0-.936 1.172l.468-.586zM12 11.5h-.75zM12 8h-.75v3.5h1.5V8zm10 4h-.75A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 22v-.75A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2 12h.75A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2v.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zM3 3.25l.469.586 2.5-2L5.5 1.25 5.031.664l-2.5 2zm18 0 .468-.586-2.5-2-.468.586-.468.586 2.5 2zM9 13v.75h1.5v-1.5H9zm3-1.5h-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25z"/>
    </svg>
  );
};
