import React from 'react';

export interface IconBoldMessage29Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage29: React.FC<IconBoldMessage29Props> = ({
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
      <path fill="currentColor" d="M21 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M19 8c.71 0 1.362-.246 1.875-.658 1.988 3.775 1.395 8.554-1.78 11.73-2.272 2.27-7.09 4.235-11 1.819a3 3 0 0 0-.408-.235.9.9 0 0 0-.445-.067 2.5 2.5 0 0 0-.388.085c-1.258.326-1.887.489-2.34.396a2 2 0 0 1-1.561-1.56c-.092-.454.07-1.083.397-2.34.052-.2.078-.3.084-.389a.9.9 0 0 0-.068-.446c-.033-.083-.1-.19-.234-.407-2.424-3.901-.548-8.63 1.82-11 3.167-3.166 7.93-3.765 11.7-1.795A3 3 0 0 0 19 8m-9.947 3.858a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
    </svg>
  );
};
