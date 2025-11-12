import React from 'react';

export interface IconBoldDown3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDown3: React.FC<IconBoldDown3Props> = ({
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
      <path fill="#2D264B" d="M12 2.25a.75.75 0 0 1 .75.75v10.25h2.115c2.282 0 3.57 2.62 2.179 4.427L14.179 21.4a2.75 2.75 0 0 1-4.358 0l-2.865-3.722c-1.392-1.808-.103-4.427 2.18-4.427h2.114V3a.75.75 0 0 1 .75-.75"/>
    </svg>
  );
};
