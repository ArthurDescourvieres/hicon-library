import React from 'react';

export interface IconBoldRotateRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldRotateRight: React.FC<IconBoldRotateRightProps> = ({
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
      <path fill="#2D264B" d="M21.407.997a.75.75 0 0 0-1.5.006l.009 1.986c.003.769.005 1.298-.034 1.701a11 11 0 0 0-1.43-1.29A10.7 10.7 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0A9.25 9.25 0 1 1 12 2.75c2.084 0 4.004.688 5.55 1.85q.746.56 1.364 1.255l-.16.02c-.412.046-.956.044-1.765.04l-1.986-.008a.75.75 0 1 0-.006 1.5l2.029.009c.755.003 1.384.006 1.89-.05.531-.057 1.02-.187 1.446-.516a2.7 2.7 0 0 0 .488-.488c.33-.425.459-.915.517-1.446.055-.506.052-1.135.049-1.89z"/>
    </svg>
  );
};
