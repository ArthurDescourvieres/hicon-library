import React from 'react';

export interface IconBoldDropProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDrop: React.FC<IconBoldDropProps> = ({
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
      <path fill="#2D264B" d="M12 .25c-.73 0-1.295.305-1.808.771-.47.427-.955 1.046-1.524 1.772l-.039.05C7.463 4.328 6.133 6.168 5.091 8.01 4.065 9.824 3.25 11.756 3.25 13.397c0 5.116 3.867 9.359 8.75 9.359s8.75-4.243 8.75-9.36c0-1.64-.815-3.572-1.84-5.385-1.043-1.842-2.373-3.682-3.539-5.169l-.039-.05c-.57-.725-1.054-1.344-1.524-1.77C13.295.554 12.729.25 12 .25"/>
    </svg>
  );
};
