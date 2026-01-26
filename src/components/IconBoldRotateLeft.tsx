import React from 'react';

export interface IconBoldRotateLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldRotateLeft: React.FC<IconBoldRotateLeftProps> = ({
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
      <path fill="currentColor" d="M4.013 1.003a.75.75 0 0 0-1.5-.006l-.01 2.029c-.003.755-.006 1.384.05 1.89.058.531.187 1.02.516 1.446a2.7 2.7 0 0 0 .489.488c.425.33.914.459 1.445.517.506.055 1.136.052 1.89.049l2.03-.01a.75.75 0 0 0-.007-1.5l-1.986.01c-.809.003-1.353.005-1.764-.04l-.089-.011Q5.7 5.165 6.45 4.6A9.2 9.2 0 0 1 12 2.75 9.25 9.25 0 1 1 2.75 12a.75.75 0 0 0-1.5 0c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25c-2.42 0-4.655.8-6.451 2.15q-.817.615-1.503 1.369l-.002-.015c-.045-.412-.044-.956-.04-1.765z"/>
    </svg>
  );
};
