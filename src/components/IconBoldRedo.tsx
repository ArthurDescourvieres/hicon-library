import React from 'react';

export interface IconBoldRedoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldRedo: React.FC<IconBoldRedoProps> = ({
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
      <path fill="#2D264B" d="M16.942 4.467a.75.75 0 1 0-1.056 1.066l1.41 1.398c.575.57.96.953 1.22 1.275l.009.012.025.032H10a5.75 5.75 0 0 0 0 11.5h8a.75.75 0 0 0 0-1.5h-8a4.25 4.25 0 0 1 0-8.5h8.55l-.034.044c-.26.322-.645.706-1.22 1.275l-1.41 1.398a.75.75 0 0 0 1.056 1.066l1.441-1.429c.536-.531.983-.974 1.302-1.371.335-.417.59-.854.657-1.388a2.7 2.7 0 0 0 0-.69c-.068-.534-.322-.971-.657-1.388-.319-.397-.766-.84-1.302-1.371z"/>
    </svg>
  );
};
