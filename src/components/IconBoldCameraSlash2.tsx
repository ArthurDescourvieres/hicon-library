import React from 'react';

export interface IconBoldCameraSlash2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldCameraSlash2: React.FC<IconBoldCameraSlash2Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M9.25 1.25a2.5 2.5 0 0 0-2.5 2.5v.179a.82.82 0 0 1-.821.821A4.68 4.68 0 0 0 1.25 9.429v4.61c0 1.604 0 2.86.095 3.865.098 1.023.3 1.861.752 2.6q.206.334.452.636l-1.08 1.08a.75.75 0 1 0 1.061 1.06l20-20a.75.75 0 0 0-1.06-1.06l-2.6 2.598a4.7 4.7 0 0 0-.8-.068.82.82 0 0 1-.821-.821V3.75a2.5 2.5 0 0 0-2.5-2.5zm5.08 8.11a4.75 4.75 0 0 0-6.47 6.47l1.122-1.122a3.25 3.25 0 0 1 4.226-4.226z" clip-rule="evenodd"/><path fill="currentColor" d="M6.596 23.155c-.602-.058-1.14-.151-1.63-.31L10 17.81a4.75 4.75 0 0 0 6.31-6.31l1.154-1.155a1 1 0 0 0 1.38-1.38l2.686-2.686a4.66 4.66 0 0 1 1.219 3.15v4.61c0 1.604 0 2.86-.096 3.865-.097 1.023-.299 1.861-.751 2.6a5.75 5.75 0 0 1-1.899 1.899c-.739.452-1.577.654-2.6.752-1.004.095-2.261.095-3.865.095H10.46c-1.604 0-2.86 0-3.865-.096"/><path fill="currentColor" d="M12 16.75q-.432-.001-.832-.107l3.975-3.975q.106.4.107.832A3.25 3.25 0 0 1 12 16.75"/>
    </svg>
  );
};
