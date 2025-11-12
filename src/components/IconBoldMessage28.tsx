import React from 'react';

export interface IconBoldMessage28Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage28: React.FC<IconBoldMessage28Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M8.096 20.89c3.91 2.417 8.727.453 10.998-1.819C23 15.166 23 8.834 19.094 4.93c-3.905-3.905-10.236-3.905-14.142 0-2.368 2.368-4.244 7.098-1.82 11 .134.215.201.323.234.406a.9.9 0 0 1 .068.446 2.5 2.5 0 0 1-.084.389c-.326 1.257-.49 1.886-.397 2.34a2 2 0 0 0 1.561 1.56c.453.093 1.082-.07 2.34-.396.2-.052.3-.078.388-.085a.9.9 0 0 1 .445.067c.082.033.191.1.409.235m.957-9.032a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
