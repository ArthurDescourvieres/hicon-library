import React from 'react';

export interface IconBoldWatch2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldWatch2: React.FC<IconBoldWatch2Props> = ({
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
      <path fill="currentColor" d="M6.25 2A.75.75 0 0 1 7 1.25h8a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2"/><path fill="currentColor" fill-rule="evenodd" d="M14.345 3.32c-.864-.07-1.94-.07-3.311-.07h-.068c-1.371 0-2.447 0-3.311.07-.88.073-1.607.221-2.265.557A5.75 5.75 0 0 0 2.877 6.39c-.336.658-.484 1.385-.556 2.265-.071.864-.071 1.94-.071 3.311v.068c0 1.371 0 2.447.07 3.311.073.88.221 1.607.557 2.265a5.75 5.75 0 0 0 2.513 2.513c.658.336 1.385.485 2.265.556.864.071 1.94.071 3.311.071h.068c1.371 0 2.447 0 3.311-.07.88-.072 1.607-.221 2.265-.557a5.75 5.75 0 0 0 2.513-2.513c.336-.658.485-1.385.556-2.265.058-.708.069-1.557.07-2.595H21a.75.75 0 0 0 0-1.5h-1.25c-.002-1.038-.013-1.887-.07-2.595-.072-.88-.221-1.607-.557-2.265a5.75 5.75 0 0 0-2.513-2.513c-.658-.336-1.385-.484-2.265-.556M11.75 8a.75.75 0 0 0-1.5 0v3.5a2.25 2.25 0 0 0 2.25 2.25H14a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"/><path fill="currentColor" d="M6.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"/>
    </svg>
  );
};
