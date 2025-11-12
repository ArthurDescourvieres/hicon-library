import React from 'react';

export interface IconBoldVolumeMuteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldVolumeMute: React.FC<IconBoldVolumeMuteProps> = ({
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
      <path fill="#2D264B" d="M17.77 3.331c-.835-.243-1.638.09-2.407.575-.773.488-1.711 1.261-2.885 2.228l-1.04.858c-.2.164-.28.23-.36.29a4.25 4.25 0 0 1-2.332.837c-.1.005-.204.005-.462.005h-.042c-.223 0-.394 0-.548.017a2.75 2.75 0 0 0-2.427 2.427c-.017.154-.017.325-.017.548v1.23c0 .223 0 .395.017.548a2.75 2.75 0 0 0 2.427 2.427c.154.017.325.017.548.017h.042c.258 0 .363 0 .462.005a4.25 4.25 0 0 1 2.332.837c.08.06.16.126.36.29l1.04.858c1.174.967 2.112 1.74 2.885 2.228.77.485 1.572.819 2.407.575.277-.08.54-.204.778-.367.719-.49.972-1.32 1.087-2.223.115-.907.115-2.122.115-3.643V9.564c0-1.52 0-2.736-.115-3.642-.115-.903-.368-1.734-1.087-2.224a2.8 2.8 0 0 0-.778-.367"/>
    </svg>
  );
};
