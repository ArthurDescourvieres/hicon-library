import React from 'react';

export interface IconBoldForward5SecondsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldForward5Seconds: React.FC<IconBoldForward5SecondsProps> = ({
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
      <path fill="currentColor" d="M21.487.997a.75.75 0 0 0-1.5.006l.01 1.986c.003.81.004 1.353-.04 1.765l-.003.015c-.456-.502-.96-.96-1.503-1.369A10.7 10.7 0 0 0 12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12a.75.75 0 0 0-1.5 0A9.25 9.25 0 1 1 12 2.75c2.084 0 4.004.688 5.55 1.85q.752.564 1.373 1.265l-.089.01c-.411.046-.955.044-1.764.04l-1.986-.008a.75.75 0 1 0-.007 1.5l2.03.009c.754.003 1.384.006 1.89-.05.53-.057 1.02-.187 1.445-.516a2.7 2.7 0 0 0 .489-.488c.329-.425.458-.915.516-1.446.056-.506.053-1.135.05-1.89z"/><path fill="currentColor" d="M11 8.25A2.75 2.75 0 0 0 8.25 11v1c0 .966.784 1.75 1.75 1.75h4a.25.25 0 0 1 .25.25v1c0 .69-.56 1.25-1.25 1.25H9a.75.75 0 0 0 0 1.5h4A2.75 2.75 0 0 0 15.75 15v-1A1.75 1.75 0 0 0 14 12.25h-4a.25.25 0 0 1-.25-.25v-1c0-.69.56-1.25 1.25-1.25h3.76a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
};
