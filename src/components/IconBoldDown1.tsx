import React from 'react';

export interface IconBoldDown1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDown1: React.FC<IconBoldDown1Props> = ({
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
      <path fill="#2D264B" d="M12.75 4a.75.75 0 0 0-1.5 0v15.03a4 4 0 0 1-.36-.257c-.413-.332-.9-.822-1.61-1.538l-1.747-1.763a.75.75 0 1 0-1.066 1.056l1.78 1.795c.669.676 1.217 1.228 1.704 1.62.508.407 1.023.702 1.64.781q.41.052.817 0c.618-.079 1.133-.374 1.64-.781.488-.392 1.036-.944 1.706-1.62l1.779-1.795a.75.75 0 0 0-1.066-1.056l-1.747 1.763c-.71.716-1.197 1.206-1.61 1.538a4 4 0 0 1-.36.258z"/>
    </svg>
  );
};
