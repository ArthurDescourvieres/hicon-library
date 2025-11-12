import React from 'react';

export interface IconLinearPassword4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearPassword4: React.FC<IconLinearPassword4Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m17 14 .053-.105a2 2 0 0 0 0-1.79.19.19 0 0 0-.171-.105h-5.959M14 14l.053-.105a2 2 0 0 0 0-1.79L14 12m-3.077 0q0-.19-.072-.371l-.4-1A1 1 0 0 0 9.523 10H8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.523a1 1 0 0 0 .928-.629l.4-1q.072-.18.072-.37Zm-8.45 0c0-2.547 0-3.82.552-4.895q.113-.221.248-.43C3.928 5.661 5.03 5.024 7.237 3.75s3.309-1.91 4.515-1.97a5 5 0 0 1 .496 0c1.206.06 2.309.696 4.515 1.97s3.31 1.91 3.964 2.925q.134.209.248.43c.551 1.074.551 2.348.551 4.895s0 3.821-.551 4.895q-.114.222-.248.43c-.655 1.015-1.758 1.651-3.964 2.925s-3.309 1.91-4.515 1.97a5 5 0 0 1-.496 0c-1.206-.06-2.31-.696-4.515-1.97-2.206-1.274-3.31-1.91-3.964-2.925a5 5 0 0 1-.248-.43c-.551-1.074-.551-2.348-.551-4.895Z"/>
    </svg>
  );
};
