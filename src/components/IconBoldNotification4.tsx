import React from 'react';

export interface IconBoldNotification4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldNotification4: React.FC<IconBoldNotification4Props> = ({
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
      <path fill="currentColor" d="M19.183 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path fill="currentColor" fill-rule="evenodd" d="M11.1 1.25a5.645 5.645 0 0 0-5.602 6.345l.08.635a2.9 2.9 0 0 1-.911 2.492 4.4 4.4 0 0 0-.976 5.155l.104.213a4.72 4.72 0 0 0 3.952 2.65l.189.324c1.012 1.736 2.59 2.686 4.247 2.686s3.235-.95 4.248-2.686l.191-.328a4.562 4.562 0 0 0 2.745-7.891l-.044-.04a3.1 3.1 0 0 1-.808-1.215 3 3 0 1 1-.812-5.508 5.64 5.64 0 0 0-4.9-2.832zm1.083 19c-.92 0-1.903-.462-2.663-1.5h5.327c-.76 1.038-1.742 1.5-2.664 1.5" clip-rule="evenodd"/>
    </svg>
  );
};
