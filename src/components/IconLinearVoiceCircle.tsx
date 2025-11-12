import React from 'react';

export interface IconLinearVoiceCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearVoiceCircle: React.FC<IconLinearVoiceCircleProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M12 8v8m3-7v6m3-4v2M9 9v6m-3-4v2m16-1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"/>
    </svg>
  );
};
