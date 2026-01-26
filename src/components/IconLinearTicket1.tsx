import React from 'react';

export interface IconLinearTicket1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTicket1: React.FC<IconLinearTicket1Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M2 8.444A4.444 4.444 0 0 1 6.444 4h11.112A4.444 4.444 0 0 1 22 8.444c0 .544-.312 1.039-.801 1.274l-.488.234c-1.718.825-1.718 3.271 0 4.096l.488.234c.49.235.801.73.801 1.274A4.444 4.444 0 0 1 17.556 20H6.444A4.444 4.444 0 0 1 2 15.556c0-.544.312-1.039.801-1.274l.488-.234c1.718-.825 1.718-3.271 0-4.096L2.8 9.718A1.41 1.41 0 0 1 2 8.444Z"/><path stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-width="1.5" d="M14 4v16"/>
    </svg>
  );
};
