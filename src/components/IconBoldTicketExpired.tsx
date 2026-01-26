import React from 'react';

export interface IconBoldTicketExpiredProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTicketExpired: React.FC<IconBoldTicketExpiredProps> = ({
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
      <path fill="currentColor" d="m6.185 3.977 2.976 9.141.025.066V15.2a.75.75 0 0 0 1.5 0V3.582c.296-.131.617-.207.956-.252.595-.08 1.344-.08 2.242-.08h4.608a5.195 5.195 0 0 1 5.194 5.194c0 .832-.477 1.59-1.227 1.95l-.487.234c-1.15.553-1.15 2.191 0 2.744l.487.234a2.16 2.16 0 0 1 1.227 1.95 5.194 5.194 0 0 1-5.194 5.194H9.938a.75.75 0 0 0 .748-.75v-1.2a.75.75 0 0 0-1.5 0V20a.75.75 0 0 0 .748.75H6.82a4.85 4.85 0 0 1-4.216-2.449l-.188-.328a1.92 1.92 0 0 1 .418-2.411l.525-.451c.969-.832.545-2.415-.71-2.65l-.531-.1a2.16 2.16 0 0 1-1.69-1.566 5.194 5.194 0 0 1 3.673-6.362l.039-.01c.67-.18 1.23-.33 1.696-.404q.175-.028.349-.042"/>
    </svg>
  );
};
