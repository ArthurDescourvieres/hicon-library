import React from 'react';

export interface IconLinearColorPickerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearColorPicker: React.FC<IconLinearColorPickerProps> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="m13.726 12.063-2.823 5.3a9 9 0 0 1-.285.518 5 5 0 0 1-.475.652c-.095.112-.198.218-.403.43-1.828 1.891-2.742 2.836-3.299 2.974a2 2 0 0 1-2.404-1.388c-.159-.551.203-1.815.926-4.343.081-.284.122-.426.17-.565q.135-.382.329-.738c.07-.129.148-.254.305-.505l3.179-5.094m-3.13-4.407a1.97 1.97 0 0 1 2.078-.675l1.003.281c.566.16.848.239 1.134.236a2 2 0 0 0 .347-.034c.281-.052.546-.186 1.075-.454 1.896-.959 2.844-1.438 3.629-1.183a2 2 0 0 1 .623.334c.647.513.77 1.558 1.018 3.647l.05.415c.067.574.101.86.211 1.121q.045.109.104.212c.14.245.347.447.76.85l.805.786a1.968 1.968 0 0 1-2.36 3.113L6.379 7.82a1.968 1.968 0 0 1-.561-2.924Z"/>
    </svg>
  );
};
