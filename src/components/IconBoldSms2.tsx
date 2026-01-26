import React from 'react';

export interface IconBoldSms2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSms2: React.FC<IconBoldSms2Props> = ({
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
      <path fill="currentColor" d="M2 14.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM5.52 7.206l-.945-.945a5 5 0 0 1 2.1-1.806C7.665 4 8.9 4 11.37 4h1.624c2.47 0 3.704 0 4.696.455a5 5 0 0 1 2.001 1.662l-1.09 1.09c-1.681 1.681-2.89 2.888-3.933 3.683-1.025.783-1.802 1.097-2.607 1.097s-1.582-.314-2.607-1.097C8.41 10.096 7.202 8.889 5.52 7.206"/><path fill="currentColor" d="M3.446 10.9c.191-1.376.328-2.364.516-3.13l.538.538c1.632 1.632 2.911 2.911 4.044 3.775 1.159.884 2.251 1.404 3.517 1.404 1.265 0 2.358-.52 3.517-1.404 1.132-.864 2.411-2.143 4.044-3.775l.73-.73c.215.79.359 1.828.566 3.321.436 3.14.654 4.711.175 5.93a5 5 0 0 1-2.201 2.528C17.75 20 16.165 20 12.994 20H11.37c-1.206 0-2.183 0-2.993-.035A2 2 0 0 0 8 16H6.732A2 2 0 0 0 5 13H3.165c.074-.613.17-1.307.281-2.1"/>
    </svg>
  );
};
