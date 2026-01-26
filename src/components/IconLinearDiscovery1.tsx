import React from 'react';

export interface IconLinearDiscovery1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearDiscovery1: React.FC<IconLinearDiscovery1Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M20.25 7.237c1.274 2.206 1.91 3.309 1.97 4.515q.014.247 0 .496c-.06 1.206-.696 2.309-1.97 4.515s-1.91 3.31-2.925 3.964q-.208.134-.43.248c-1.074.551-2.348.551-4.895.551s-3.82 0-4.895-.551a5 5 0 0 1-.43-.248c-1.014-.655-1.651-1.758-2.925-3.964s-1.91-3.309-1.97-4.515a5 5 0 0 1 0-.496c.06-1.206.696-2.31 1.97-4.515 1.274-2.206 1.91-3.31 2.925-3.964q.209-.135.43-.248c1.074-.551 2.348-.551 4.895-.551s3.821 0 4.895.55q.222.115.43.249c1.015.655 1.651 1.758 2.925 3.964Z"/><path stroke="currentColor" stroke-width="1.5" d="M10.016 11.104a2 2 0 0 1 1.088-1.088l2.677-1.102c.822-.339 1.644.483 1.305 1.305l-1.102 2.677a2 2 0 0 1-1.088 1.088l-2.677 1.102c-.822.339-1.644-.483-1.305-1.305z"/>
    </svg>
  );
};
