import React from 'react';

export interface IconLinearPassword3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearPassword3: React.FC<IconLinearPassword3Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M11 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0h5.882c.072 0 .138.04.17.106a2 2 0 0 1 0 1.789L17 14m-3 0 .053-.105a2 2 0 0 0 0-1.79L14 12M2.474 12c0-2.547 0-3.82.55-4.895q.115-.221.249-.43C3.928 5.661 5.03 5.024 7.237 3.75s3.309-1.91 4.515-1.97a5 5 0 0 1 .496 0c1.206.06 2.309.696 4.515 1.97s3.31 1.91 3.964 2.925q.134.209.248.43c.551 1.074.551 2.348.551 4.895s0 3.821-.551 4.895q-.114.222-.248.43c-.655 1.015-1.758 1.651-3.964 2.925s-3.309 1.91-4.515 1.97a5 5 0 0 1-.496 0c-1.206-.06-2.31-.696-4.515-1.97-2.206-1.274-3.31-1.91-3.964-2.925a5 5 0 0 1-.248-.43c-.551-1.074-.551-2.348-.551-4.895Z"/>
    </svg>
  );
};
