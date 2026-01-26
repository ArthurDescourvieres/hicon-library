import React from 'react';

export interface IconBoldMusicFilterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMusicFilter: React.FC<IconBoldMusicFilterProps> = ({
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
      <path fill="currentColor" d="M2 2.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5zm13.25 10.69 6-1.725v2.956a3.1 3.1 0 0 0-1.5-.39c-1.626 0-3 1.272-3 2.906s1.374 2.907 3 2.907c1.627 0 3-1.272 3-2.907V8.063c0-1.258-1.245-2.073-2.396-1.734L16.92 7.341l-1.53.419c-.952.26-1.64 1.107-1.64 2.106v6.461a3.1 3.1 0 0 0-1.5-.39c-1.626 0-3 1.272-3 2.907s1.374 2.906 3 2.906c1.627 0 3-1.271 3-2.906zM2 8.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
};
