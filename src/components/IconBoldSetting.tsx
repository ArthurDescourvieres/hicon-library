import React from 'react';

export interface IconBoldSettingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSetting: React.FC<IconBoldSettingProps> = ({
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
      <path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/><path fill="currentColor" fill-rule="evenodd" d="M8.585 3.232c.98-3.435 5.85-3.435 6.83 0a2.05 2.05 0 0 0 2.47 1.427c3.466-.869 5.9 3.348 3.415 5.914a2.05 2.05 0 0 0 0 2.854c2.485 2.566.051 6.783-3.414 5.914a2.05 2.05 0 0 0-2.471 1.427c-.98 3.435-5.85 3.435-6.83 0a2.05 2.05 0 0 0-2.47-1.427c-3.466.869-5.9-3.348-3.415-5.914.77-.796.77-2.058 0-2.854C.215 8.007 2.649 3.79 6.114 4.66a2.05 2.05 0 0 0 2.471-1.427M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"/>
    </svg>
  );
};
