import React from 'react';

export interface IconBoldTicketDiscountProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTicketDiscount: React.FC<IconBoldTicketDiscountProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M6.444 3.25A5.194 5.194 0 0 0 1.25 8.444c0 .832.477 1.59 1.227 1.95l.487.234c1.151.553 1.151 2.191 0 2.744l-.487.234a2.16 2.16 0 0 0-1.227 1.95 5.194 5.194 0 0 0 5.194 5.194h11.112a5.194 5.194 0 0 0 5.194-5.194c0-.832-.477-1.59-1.227-1.95l-.487-.234c-1.151-.553-1.151-2.191 0-2.744l.487-.234a2.16 2.16 0 0 0 1.227-1.95 5.194 5.194 0 0 0-5.194-5.194zm8.743 5.563a.75.75 0 0 1 0 1.06L9.53 15.53a.75.75 0 0 1-1.06-1.06l5.656-5.657a.75.75 0 0 1 1.061 0M9 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2m6 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
