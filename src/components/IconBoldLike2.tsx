import React from 'react';

export interface IconBoldLike2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLike2: React.FC<IconBoldLike2Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M3.612 4.604C3 5.724 3 7.21 3 10.182v3.236a5 5 0 0 0 4.946 4.945h.134a1 1 0 0 1 .711.303l.008.008.32.332c1.353 1.407 2.03 2.11 2.881 2.11.85 0 1.528-.703 2.882-2.11l.319-.332.008-.008a1 1 0 0 1 .71-.302h.135A5 5 0 0 0 21 13.417v-3.236c0-2.972 0-4.458-.612-5.578a5 5 0 0 0-1.992-1.992C17.276 2 15.79 2 12.818 2h-1.636c-2.972 0-4.458 0-5.578.612a5 5 0 0 0-1.992 1.992M12.8 6.573c.837-.53 2.189-1.033 3.356.157C18.926 9.556 14.176 15 12 15S5.074 9.556 7.844 6.73c1.167-1.19 2.519-.688 3.356-.157.473.3 1.128.3 1.6 0" clip-rule="evenodd"/>
    </svg>
  );
};
