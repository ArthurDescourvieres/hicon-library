import React from 'react';

export interface IconLinearTicketStar2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearTicketStar2: React.FC<IconLinearTicketStar2Props> = ({
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
      <path stroke="#414141" stroke-dasharray="2 3" stroke-linecap="round" stroke-width="1.5" d="M8 4v16"/><path stroke="#414141" stroke-width="1.5" d="M2 8.444A4.444 4.444 0 0 1 6.444 4h11.112A4.444 4.444 0 0 1 22 8.444c0 .544-.312 1.039-.801 1.274l-.488.234c-1.718.825-1.718 3.271 0 4.096l.488.234c.49.235.801.73.801 1.274A4.444 4.444 0 0 1 17.556 20H6.444A4.444 4.444 0 0 1 2 15.556c0-.544.312-1.039.801-1.274l.488-.234c1.718-.825 1.718-3.271 0-4.096L2.8 9.718A1.41 1.41 0 0 1 2 8.444Z"/><path stroke="#414141" stroke-width="1.5" d="M13.018 9.737a1.023 1.023 0 0 1 1.964 0c.139.44.535.738.983.738 1 0 1.417 1.323.607 1.93a1.09 1.09 0 0 0-.375 1.193c.31.983-.78 1.801-1.59 1.193a1.006 1.006 0 0 0-1.214 0c-.81.608-1.9-.21-1.59-1.193a1.09 1.09 0 0 0-.375-1.193c-.81-.607-.394-1.93.607-1.93.448 0 .844-.298.982-.738Z"/>
    </svg>
  );
};
