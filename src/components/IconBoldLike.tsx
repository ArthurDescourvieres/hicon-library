import React from 'react';

export interface IconBoldLikeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldLike: React.FC<IconBoldLikeProps> = ({
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
      <path fill="#2D264B" d="m9.345 8.315 2.23-3.625a1.45 1.45 0 0 1 2.668.98L14 7.25a2.82 2.82 0 0 0 2.788 3.25h.69c2.537 0 4.187 2.67 3.052 4.939l-1.148 2.297A5 5 0 0 1 14.91 20.5H12a4 4 0 0 1-3.265-1.688q.015-.155.015-.312v-8c0-.331-.05-.65-.141-.951.177-.326.413-.71.736-1.234M7.25 18.5a1.75 1.75 0 1 1-3.5 0v-8a1.75 1.75 0 1 1 3.5 0z"/>
    </svg>
  );
};
