import React from 'react';

export interface IconLinearFilter5Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearFilter5: React.FC<IconLinearFilter5Props> = ({
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
      <path fill="currentColor" d="M12 4.25a.75.75 0 0 0 0 1.5zm8 1.5a.75.75 0 0 0 0-1.5zm-8 12.5a.75.75 0 0 0 0 1.5zm8 1.5a.75.75 0 0 0 0-1.5zm-8-7a.75.75 0 0 0 0-1.5zm-8-1.5a.75.75 0 0 0 0 1.5zM12 5v.75h8v-1.5h-8zm0 14v.75h8v-1.5h-8zm0-7v-.75H4v1.5h8zM4 5h-.75A2.75 2.75 0 0 0 6 7.75v-1.5c-.69 0-1.25-.56-1.25-1.25zm2 2v.75A2.75 2.75 0 0 0 8.75 5h-1.5c0 .69-.56 1.25-1.25 1.25zm2-2h.75A2.75 2.75 0 0 0 6 2.25v1.5c.69 0 1.25.56 1.25 1.25zM6 3v-.75A2.75 2.75 0 0 0 3.25 5h1.5c0-.69.56-1.25 1.25-1.25zM4 19h-.75A2.75 2.75 0 0 0 6 21.75v-1.5c-.69 0-1.25-.56-1.25-1.25zm2 2v.75A2.75 2.75 0 0 0 8.75 19h-1.5c0 .69-.56 1.25-1.25 1.25zm2-2h.75A2.75 2.75 0 0 0 6 16.25v1.5c.69 0 1.25.56 1.25 1.25zm-2-2v-.75A2.75 2.75 0 0 0 3.25 19h1.5c0-.69.56-1.25 1.25-1.25zm14-5h.75A2.75 2.75 0 0 0 18 9.25v1.5c.69 0 1.25.56 1.25 1.25zm-2-2v-.75A2.75 2.75 0 0 0 15.25 12h1.5c0-.69.56-1.25 1.25-1.25zm-2 2h-.75A2.75 2.75 0 0 0 18 14.75v-1.5c-.69 0-1.25-.56-1.25-1.25zm2 2v.75A2.75 2.75 0 0 0 20.75 12h-1.5c0 .69-.56 1.25-1.25 1.25z"/>
    </svg>
  );
};
