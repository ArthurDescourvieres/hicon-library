import React from 'react';

export interface IconBoldShuffle2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldShuffle2: React.FC<IconBoldShuffle2Props> = ({
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
      <path fill="#2D264B" d="M18.78 3.47a.75.75 0 1 0-1.06 1.06l.724.725a5.75 5.75 0 0 0-4.552 2.555L8.86 15.358a4.25 4.25 0 0 1-3.536 1.892H5a.75.75 0 0 0 0 1.5h.324a5.75 5.75 0 0 0 4.784-2.56l5.032-7.547a4.25 4.25 0 0 1 2.997-1.859l-.617.515a.75.75 0 0 0 .96 1.152l1.409-1.174a1.746 1.746 0 0 0 .117-2.582zM5 5.25a.75.75 0 0 0 0 1.5h.324A4.25 4.25 0 0 1 8.86 8.643a.75.75 0 0 0 1.248-.833 5.75 5.75 0 0 0-4.784-2.56zm10.14 10.108a.75.75 0 1 0-1.248.831 5.75 5.75 0 0 0 4.31 2.541l-.682.569a.75.75 0 0 0 .96 1.152l1.409-1.174c.384-.32.595-.77.626-1.227a1.75 1.75 0 0 0-.509-1.355L18.78 15.47a.75.75 0 1 0-1.06 1.06l.712.713a4.25 4.25 0 0 1-3.292-1.885"/>
    </svg>
  );
};
