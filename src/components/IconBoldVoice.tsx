import React from 'react';

export interface IconBoldVoiceProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldVoice: React.FC<IconBoldVoiceProps> = ({
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
      <path fill="#2D264B" d="M12.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm-3 1a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm6 0a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm-9 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zm12 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"/>
    </svg>
  );
};
