import React from 'react';

export interface IconBoldCameraSlash1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldCameraSlash1: React.FC<IconBoldCameraSlash1Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M15.65 2.241a5.494 5.494 0 0 0-7.3 0l-.216.192a3.24 3.24 0 0 1-2.15.817A4.735 4.735 0 0 0 1.25 7.985v5.06c0 1.837 0 3.276.124 4.419.126 1.165.388 2.11.974 2.916q.075.104.155.203L1.47 21.616a.75.75 0 0 0 1.06 1.061l20-20a.75.75 0 0 0-1.06-1.06l-1.896 1.895a4.7 4.7 0 0 0-1.559-.262c-.792 0-1.557-.29-2.15-.817zm-1.387 6.582a4.75 4.75 0 0 0-6.44 6.44l1.13-1.13a3.25 3.25 0 0 1 4.18-4.18z" clip-rule="evenodd"/><path fill="#2D264B" d="M6.536 22.626a8 8 0 0 1-1.628-.326l5.023-5.023a4.75 4.75 0 0 0 6.346-6.346l1.958-1.959a1 1 0 0 0 .737-.737l2.94-2.94c.529.764.838 1.69.838 2.69v5.06c0 1.837 0 3.276-.124 4.419-.126 1.165-.388 2.11-.974 2.916a5.8 5.8 0 0 1-1.272 1.272c-.807.586-1.75.848-2.916.974-1.143.124-2.582.124-4.419.124h-2.09c-1.837 0-3.276 0-4.419-.124"/><path fill="#2D264B" d="M12 16.25q-.477-.001-.913-.13l4.033-4.033q.129.436.13.913A3.25 3.25 0 0 1 12 16.25"/>
    </svg>
  );
};
