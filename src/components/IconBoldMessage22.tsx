import React from 'react';

export interface IconBoldMessage22Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage22: React.FC<IconBoldMessage22Props> = ({
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
      <path fill="#2D264B" d="M3.023 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path fill="#2D264B" fill-rule="evenodd" d="M5.023 8c-.71 0-1.361-.246-1.875-.658-1.988 3.775-1.394 8.554 1.781 11.73 2.272 2.27 7.089 4.235 10.999 1.819a3 3 0 0 1 .408-.235.9.9 0 0 1 .446-.067c.088.007.188.033.388.085 1.257.326 1.886.489 2.34.396a2 2 0 0 0 1.56-1.56c.093-.454-.07-1.083-.396-2.34a2.5 2.5 0 0 1-.085-.389.9.9 0 0 1 .068-.446c.033-.083.1-.19.234-.407 2.425-3.901.549-8.63-1.82-11-3.167-3.166-7.93-3.765-11.7-1.795A3 3 0 0 1 5.024 8m9.948 3.858a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
