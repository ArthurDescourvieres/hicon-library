import React from 'react';

export interface IconBoldRightSquare1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldRightSquare1: React.FC<IconBoldRightSquare1Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M20.045 5.061C21 6.375 21 8.251 21 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 21 15.749 21 12 21s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 17.625 3 15.749 3 12s0-5.625.955-6.939A5 5 0 0 1 5.06 3.955C6.375 3 8.251 3 12 3s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106m-7.773 3.472a.75.75 0 1 1 1.056-1.066l1.441 1.429c.536.531.983.974 1.302 1.371.335.417.59.854.657 1.388a2.7 2.7 0 0 1 0 .69c-.068.534-.322.971-.657 1.388-.319.397-.766.84-1.302 1.371l-1.441 1.429a.75.75 0 0 1-1.056-1.066l1.41-1.398c.575-.57.96-.953 1.22-1.276l.034-.043H8a.75.75 0 0 1 0-1.5h6.936l-.034-.043c-.26-.323-.645-.707-1.22-1.276z" clip-rule="evenodd"/>
    </svg>
  );
};
