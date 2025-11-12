import React from 'react';

export interface IconBoldDelete2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDelete2: React.FC<IconBoldDelete2Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="m18.255 14.665.262-1.885q.121-.868.22-1.597c.135-1 .203-1.5-.096-1.841C18.34 9 17.828 9 16.8 9H7.199c-1.027 0-1.54 0-1.84.342-.298.342-.231.841-.096 1.84.065.487.14 1.017.22 1.598l.262 1.885c.285 2.048.428 3.073.73 3.895.565 1.539 1.542 2.685 2.709 3.177C9.807 22 10.538 22 12 22s2.193 0 2.816-.263c1.167-.492 2.144-1.638 2.709-3.177.302-.822.445-1.847.73-3.895M10.75 11a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/><path fill="#2D264B" d="M12 1.25A4.75 4.75 0 0 0 7.25 6v.25H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-3.25V6A4.75 4.75 0 0 0 12 1.25"/>
    </svg>
  );
};
