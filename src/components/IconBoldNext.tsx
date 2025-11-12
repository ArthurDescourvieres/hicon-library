import React from 'react';

export interface IconBoldNextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldNext: React.FC<IconBoldNextProps> = ({
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
      <path fill="#2D264B" d="M19.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0zm-6.457 1.252c-1.11-.653-1.99-1.17-2.709-1.506-.722-.34-1.395-.554-2.072-.482a3.64 3.64 0 0 0-2.57 1.508c-.395.553-.547 1.247-.62 2.05-.072.8-.072 1.833-.072 3.14v.077c0 1.306 0 2.338.072 3.139.073.803.225 1.496.62 2.05a3.64 3.64 0 0 0 2.57 1.508c.677.072 1.35-.143 2.072-.482.719-.337 1.598-.853 2.709-1.506l.069-.04c1.11-.653 1.99-1.17 2.636-1.634.65-.467 1.165-.95 1.439-1.575a3.74 3.74 0 0 0 0-2.998c-.274-.625-.789-1.108-1.44-1.575-.645-.465-1.525-.981-2.636-1.634z"/>
    </svg>
  );
};
