import React from 'react';

export interface IconBoldUp3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldUp3: React.FC<IconBoldUp3Props> = ({
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
      <path fill="#2D264B" d="M12 22.471a.75.75 0 0 0 .75-.75v-10.25h2.115c2.282 0 3.57-2.619 2.179-4.427l-2.865-3.722a2.75 2.75 0 0 0-4.358 0L6.956 7.044c-1.392 1.808-.103 4.427 2.18 4.427h2.114v10.25c0 .414.336.75.75.75"/>
    </svg>
  );
};
