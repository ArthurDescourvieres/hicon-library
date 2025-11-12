import React from 'react';

export interface IconBoldSituation1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldSituation1: React.FC<IconBoldSituation1Props> = ({
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
      <g fill="#2D264B" clip-path="url(#a)"><path d="M12 .25a.75.75 0 0 1 .75.75v4h-1.5V1A.75.75 0 0 1 12 .25M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path fill-rule="evenodd" d="M5 11.25c.005-1.376.035-2.15.245-2.795a5 5 0 0 1 3.21-3.21c.644-.21 1.419-.24 2.795-.244V6a.75.75 0 0 0 1.5 0V5c1.376.005 2.15.035 2.795.245a5 5 0 0 1 3.21 3.21c.21.644.24 1.419.244 2.795H18a.75.75 0 0 0 0 1.5h1c-.005 1.376-.035 2.15-.245 2.795a5 5 0 0 1-3.21 3.21c-.644.21-1.419.24-2.795.244V18a.75.75 0 0 0-1.5 0v1c-1.376-.005-2.15-.035-2.795-.245a5 5 0 0 1-3.21-3.21c-.21-.644-.24-1.419-.244-2.795H6a.75.75 0 0 0 0-1.5zm4.5.75a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0" clip-rule="evenodd"/><path d="M5 11.25H1a.75.75 0 0 0 0 1.5h4zM11.25 19v4a.75.75 0 0 0 1.5 0v-4zM19 12.75h4a.75.75 0 0 0 0-1.5h-4z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
};
