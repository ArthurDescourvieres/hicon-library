import React from 'react';

export interface IconBoldTicket2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTicket2: React.FC<IconBoldTicket2Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M10.75 3.25v1.817a.75.75 0 0 1-1.5 0V3.25H6.444A5.194 5.194 0 0 0 1.25 8.444c0 .832.477 1.59 1.227 1.95l.487.234c1.151.553 1.151 2.191 0 2.744l-.487.234a2.16 2.16 0 0 0-1.227 1.95 5.194 5.194 0 0 0 5.194 5.194H9.25v-1.817a.75.75 0 0 1 1.5 0v1.817h6.806a5.194 5.194 0 0 0 5.194-5.194c0-.832-.477-1.59-1.227-1.95l-.487-.234c-1.151-.553-1.151-2.191 0-2.744l.487-.234a2.16 2.16 0 0 0 1.227-1.95 5.194 5.194 0 0 0-5.194-5.194zM10 7.517a.75.75 0 0 0-.75.75V10.4a.75.75 0 0 0 1.5 0V8.267a.75.75 0 0 0-.75-.75M9.25 13.6a.75.75 0 0 1 1.5 0v2.133a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"/>
    </svg>
  );
};
