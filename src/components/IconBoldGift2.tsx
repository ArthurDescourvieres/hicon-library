import React from 'react';

export interface IconBoldGift2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldGift2: React.FC<IconBoldGift2Props> = ({
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
      <path fill="currentColor" d="M4.5 6a2.5 2.5 0 0 0-1.785 4.25h18.57A2.5 2.5 0 0 0 19.5 6zM12 4a2 2 0 1 1 2 2h-2zm0 0a2 2 0 1 0-2 2h2zm-.75 7.75H2.978l.003.121c.009.336.019.737.019 1.272 0 2.44 0 3.66.38 4.623.508 1.284 1.481 2.304 2.707 2.835C7.005 21 8.17 21 10.5 21h.75zm1.5 9.25h.75c2.33 0 3.495 0 4.413-.399 1.226-.531 2.199-1.551 2.706-2.835.381-.962.381-2.182.381-4.623 0-.6 0-1.033-.006-1.393H12.75z"/>
    </svg>
  );
};
