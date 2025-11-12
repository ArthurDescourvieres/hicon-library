import React from 'react';

export interface IconBoldPassword3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldPassword3: React.FC<IconBoldPassword3Props> = ({
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
      <path fill="#2D264B" d="M7.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/><path fill="#2D264B" fill-rule="evenodd" d="M11.752 1.78c-1.206.06-2.31.696-4.515 1.97-2.206 1.274-3.31 1.91-3.964 2.925q-.135.208-.248.43C2.474 8.178 2.474 9.452 2.474 12s0 3.82.55 4.895a5 5 0 0 0 .249.43c.655 1.015 1.758 1.651 3.964 2.925s3.309 1.91 4.515 1.97a5 5 0 0 0 .496 0c1.206-.06 2.309-.696 4.515-1.97s3.31-1.91 3.964-2.925q.134-.209.248-.43c.551-1.074.551-2.348.551-4.895s0-3.821-.551-4.896a5 5 0 0 0-.248-.429c-.655-1.015-1.758-1.651-3.964-2.925s-3.309-1.91-4.515-1.97a5 5 0 0 0-.496 0M9 9.25a2.75 2.75 0 1 0 2.646 3.5h1.843c.055.271.02.556-.107.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 .279-1.48h1.486c.055.271.02.556-.107.809l-.053.106a.75.75 0 1 0 1.342.67l.053-.105a2.75 2.75 0 0 0 0-2.46.94.94 0 0 0-.842-.52h-5.236A2.75 2.75 0 0 0 9 9.25" clip-rule="evenodd"/>
    </svg>
  );
};
