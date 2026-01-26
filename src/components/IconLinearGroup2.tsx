import React from 'react';

export interface IconLinearGroup2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearGroup2: React.FC<IconLinearGroup2Props> = ({
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
      <path fill="currentColor" d="M6.25 7.75H7A2.25 2.25 0 0 0 9.25 10v1.5A3.75 3.75 0 0 1 5.5 7.75zm3 3V10a2.25 2.25 0 0 0 2.25-2.25H13a3.75 3.75 0 0 1-3.75 3.75zm3-3h-.75A2.25 2.25 0 0 0 9.25 5.5V4A3.75 3.75 0 0 1 13 7.75zm-3-3v.75A2.25 2.25 0 0 0 7 7.75H5.5A3.75 3.75 0 0 1 9.25 4zm3 9v.75h-6V13h6zm-6 6V19h6v1.5h-6zm6 0V19a2.25 2.25 0 0 0 2.25-2.25H16a3.75 3.75 0 0 1-3.75 3.75zm-9-3H4A2.25 2.25 0 0 0 6.25 19v1.5a3.75 3.75 0 0 1-3.75-3.75zm3-3v.75A2.25 2.25 0 0 0 4 16.75H2.5A3.75 3.75 0 0 1 6.25 13zm6 0V13A3.75 3.75 0 0 1 16 16.75h-1.5a2.25 2.25 0 0 0-2.25-2.25zm1.248-3.361c.158-.254.454-.389.752-.389a2.25 2.25 0 0 0 0-4.5c-.299 0-.594-.135-.752-.389l-.021-.033c-.263-.415-.13-1.002.358-1.055Q14.039 4 14.25 4a3.75 3.75 0 1 1-.415 7.477c-.488-.053-.62-.64-.358-1.055zm3.044 7.928a.63.63 0 0 1 .534-.317h.174a2.25 2.25 0 0 0 0-4.5h-.174a.63.63 0 0 1-.534-.317c-.277-.462.023-1.183.562-1.183h.146a3.75 3.75 0 1 1 0 7.5h-.146c-.539 0-.84-.72-.562-1.183"/>
    </svg>
  );
};
