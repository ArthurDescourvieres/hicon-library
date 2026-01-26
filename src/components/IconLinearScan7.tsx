import React from 'react';

export interface IconLinearScan7Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearScan7: React.FC<IconLinearScan7Props> = ({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.49 14c.035 1.303.151 2.148.535 2.895q.113.221.248.43c.655 1.015 1.758 1.651 3.964 2.925 1.172.677 2.033 1.174 2.763 1.5M21.51 14c-.035 1.303-.151 2.148-.535 2.895q-.113.221-.248.43c-.655 1.015-1.758 1.651-3.964 2.925-1.172.677-2.033 1.174-2.763 1.5M21.51 10c-.035-1.303-.151-2.148-.535-2.895a5 5 0 0 0-.248-.43c-.655-1.015-1.758-1.651-3.964-2.925-1.172-.677-2.033-1.174-2.763-1.5M2.49 10c.035-1.303.151-2.148.535-2.895q.113-.222.248-.43C3.928 5.66 5.031 5.024 7.237 3.75 8.409 3.073 9.27 2.576 10 2.25M23 14H1"/>
    </svg>
  );
};
