import React from 'react';

export interface IconBoldTicket1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTicket1: React.FC<IconBoldTicket1Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M13.25 3.25v1.817a.75.75 0 0 0 1.5 0V3.25h2.806a5.194 5.194 0 0 1 5.194 5.194c0 .832-.477 1.59-1.227 1.95l-.487.234c-1.151.553-1.151 2.191 0 2.744l.487.234a2.16 2.16 0 0 1 1.227 1.95 5.194 5.194 0 0 1-5.194 5.194H14.75v-1.817a.75.75 0 0 0-1.5 0v1.817H6.444a5.194 5.194 0 0 1-5.194-5.194c0-.832.477-1.59 1.227-1.95l.487-.234c1.151-.553 1.151-2.191 0-2.744l-.487-.234a2.16 2.16 0 0 1-1.227-1.95A5.194 5.194 0 0 1 6.444 3.25zM14 7.517a.75.75 0 0 1 .75.75V10.4a.75.75 0 0 1-1.5 0V8.267a.75.75 0 0 1 .75-.75m.75 6.083a.75.75 0 0 0-1.5 0v2.133a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/>
    </svg>
  );
};
