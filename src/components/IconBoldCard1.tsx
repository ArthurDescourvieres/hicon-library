import React from 'react';

export interface IconBoldCard1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldCard1: React.FC<IconBoldCard1Props> = ({
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
      <path fill="#2D264B" d="M13.034 3.25c1.371 0 2.447 0 3.311.07.88.073 1.607.221 2.265.557a5.75 5.75 0 0 1 2.513 2.513c.402.789.541 1.692.593 2.86H2.285c.052-1.168.19-2.071.593-2.86A5.75 5.75 0 0 1 5.39 3.877c.658-.336 1.385-.484 2.265-.556.864-.071 1.94-.071 3.311-.071z"/><path fill="#2D264B" fill-rule="evenodd" d="M2.252 10.75q-.002.575-.002 1.244v.04c0 1.371 0 2.447.07 3.311.073.88.221 1.607.557 2.265a5.75 5.75 0 0 0 2.513 2.513c.658.336 1.385.485 2.265.556.864.071 1.94.071 3.311.071h2.068c1.371 0 2.447 0 3.311-.07.88-.072 1.607-.221 2.265-.557a5.75 5.75 0 0 0 2.513-2.513c.336-.658.485-1.385.556-2.265.071-.864.071-1.94.071-3.311v-.04q0-.668-.002-1.244zM12.25 17a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
    </svg>
  );
};
