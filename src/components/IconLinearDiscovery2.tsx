import React from 'react';

export interface IconLinearDiscovery2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearDiscovery2: React.FC<IconLinearDiscovery2Props> = ({
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
      <path stroke="#414141" stroke-width="1.5" d="M7.237 3.75c2.206-1.274 3.309-1.91 4.515-1.97q.247-.013.496 0c1.206.06 2.31.696 4.515 1.97 2.206 1.274 3.31 1.91 3.964 2.925q.135.208.248.43c.551 1.074.551 2.348.551 4.895s0 3.82-.55 4.895a5 5 0 0 1-.249.43c-.655 1.015-1.758 1.651-3.964 2.925s-3.309 1.91-4.515 1.97q-.247.014-.496 0c-1.206-.06-2.309-.696-4.515-1.97s-3.309-1.91-3.964-2.925a5 5 0 0 1-.248-.43c-.551-1.074-.551-2.348-.551-4.895s0-3.821.551-4.896q.114-.22.248-.429C3.928 5.66 5.031 5.024 7.237 3.75Z"/><path stroke="#414141" stroke-width="1.5" d="M10.016 11.104a2 2 0 0 1 1.088-1.088l2.677-1.102c.822-.339 1.644.483 1.305 1.305l-1.102 2.677a2 2 0 0 1-1.088 1.088l-2.677 1.102c-.822.339-1.644-.483-1.305-1.305z"/>
    </svg>
  );
};
