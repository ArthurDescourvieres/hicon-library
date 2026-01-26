import React from 'react';

export interface IconLinearShieldStarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearShieldStar: React.FC<IconLinearShieldStarProps> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M14.729 2c.966 0 1.75.784 1.75 1.75s.784 1.75 1.75 1.75h.59c1.21 0 2.21.927 2.164 2.137-.08 2.113-.492 5.444-2.094 8.363-.422.77-.997 1.543-1.634 2.28-1.98 2.287-2.97 3.43-5.255 3.43s-3.275-1.143-5.255-3.43c-.637-.737-1.211-1.51-1.634-2.28-1.554-2.832-1.987-5.84-2.086-7.791-.06-1.207.938-2.126 2.146-2.126h.309a2.04 2.04 0 0 0 2.04-2.041A2.043 2.043 0 0 1 9.563 2z"/><path stroke="currentColor" stroke-width="1.5" d="M10.69 8.983a1.364 1.364 0 0 1 2.62 0c.184.586.713.983 1.31.983 1.334 0 1.89 1.764.81 2.574a1.45 1.45 0 0 0-.5 1.591c.412 1.31-1.04 2.401-2.12 1.59a1.34 1.34 0 0 0-1.62 0c-1.079.811-2.531-.28-2.12-1.59a1.45 1.45 0 0 0-.5-1.59c-1.079-.81-.524-2.575.81-2.575.597 0 1.126-.397 1.31-.983Z"/>
    </svg>
  );
};
