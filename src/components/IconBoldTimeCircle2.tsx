import React from 'react';

export interface IconBoldTimeCircle2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldTimeCircle2: React.FC<IconBoldTimeCircle2Props> = ({
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
      <path fill="#2D264B" d="M5.969 1.836A.75.75 0 1 0 5.03.664l-2.5 2a.75.75 0 1 0 .938 1.172zm13-1.172a.75.75 0 0 0-.937 1.172l2.5 2a.75.75 0 1 0 .936-1.172z"/><path fill="#2D264B" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M12.75 7a.75.75 0 0 0-1.5 0v5a.8.8 0 0 0 1.366.566l2.036-2.036a.75.75 0 0 0-1.061-1.06l-.841.84z" clip-rule="evenodd"/>
    </svg>
  );
};
