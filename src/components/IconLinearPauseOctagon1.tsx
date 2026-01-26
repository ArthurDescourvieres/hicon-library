import React from 'react';

export interface IconLinearPauseOctagon1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearPauseOctagon1: React.FC<IconLinearPauseOctagon1Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M7.237 3.75c2.206-1.274 3.309-1.91 4.515-1.97a5 5 0 0 1 .496 0c1.206.06 2.309.696 4.515 1.97s3.31 1.91 3.964 2.925q.134.208.248.43c.551 1.074.551 2.348.551 4.895s0 3.82-.551 4.895q-.114.221-.248.43c-.655 1.015-1.758 1.651-3.964 2.925s-3.309 1.91-4.515 1.97a5 5 0 0 1-.496 0c-1.206-.06-2.31-.696-4.515-1.97-2.206-1.274-3.31-1.91-3.964-2.925a5 5 0 0 1-.248-.43c-.551-1.074-.551-2.348-.551-4.895s0-3.821.55-4.896q.115-.22.249-.429C3.928 5.66 5.03 5.024 7.237 3.75Z"/><path stroke="currentColor" stroke-width="1.5" d="M8 12c0-.93 0-1.395.102-1.777a3 3 0 0 1 2.121-2.12C10.606 8 11.07 8 12 8s1.395 0 1.776.102a3 3 0 0 1 2.122 2.121C16 10.606 16 11.07 16 12s0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C13.395 16 12.93 16 12 16s-1.395 0-1.777-.102a3 3 0 0 1-2.12-2.122C8 13.395 8 12.93 8 12Z"/>
    </svg>
  );
};
