import React from 'react';

export interface IconLinearVolumeLowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearVolumeLow: React.FC<IconLinearVolumeLowProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="m20 15.731.4-.4.115-.115A5 5 0 0 0 20.4 8.13l-.4-.4M8.915 15.89l.996.822c2.422 1.996 3.633 2.994 4.649 2.698a2 2 0 0 0 .566-.267C16 18.55 16 16.98 16 13.841V9.62c0-3.138 0-4.707-.874-5.303a2 2 0 0 0-.566-.267c-1.016-.296-2.227.702-4.65 2.699l-.995.82c-.194.16-.29.24-.389.313a5 5 0 0 1-2.743.985c-.122.006-.248.006-.5.006-.263 0-.395 0-.505.012a2 2 0 0 0-1.766 1.766c-.012.11-.012.242-.012.506v1.147c0 .263 0 .395.012.506a2 2 0 0 0 1.766 1.765c.11.012.242.012.506.012.251 0 .377 0 .499.006a5 5 0 0 1 2.743.985c.098.073.195.153.389.313Z"/>
    </svg>
  );
};
