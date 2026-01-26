import React from 'react';

export interface IconBoldDollarCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDollarCircle: React.FC<IconBoldDollarCircleProps> = ({
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
      <path fill="currentColor" d="M11.047 6.993q.1-.058.203-.103v4.03c-1.627-.719-1.78-3.016-.203-3.927M12.75 17.11v-4.03c1.627.718 1.78 3.016.203 3.927a2 2 0 0 1-.203.103"/><path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m11.5-7a.75.75 0 0 0-1.5 0v.308q-.492.122-.953.386c-2.722 1.572-2.376 5.605.574 6.69l.379.14v4.695a2.2 2.2 0 0 1-1.312-1.02l-.376-.65a.75.75 0 1 0-1.299.75l.376.65a3.7 3.7 0 0 0 2.611 1.804V19a.75.75 0 0 0 1.5 0v-.308a3.7 3.7 0 0 0 .953-.386c2.722-1.572 2.376-5.605-.574-6.69l-.379-.14V6.782a2.2 2.2 0 0 1 1.312 1.02l.376.65a.75.75 0 0 0 1.299-.75l-.376-.65a3.7 3.7 0 0 0-2.611-1.805z" clip-rule="evenodd"/>
    </svg>
  );
};
