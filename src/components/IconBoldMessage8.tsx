import React from 'react';

export interface IconBoldMessage8Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage8: React.FC<IconBoldMessage8Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M21.455 4.73C22 5.8 22 7.2 22 10v1.184c0 1.69 0 2.534-.202 3.223a5 5 0 0 1-3.391 3.391c-.69.202-1.534.202-3.223.202h-.614a5 5 0 0 0-2.848.913l-.053.038-2.61 1.864c-.895.64-2.072-.284-1.663-1.305A1.1 1.1 0 0 0 6.373 18h-.601A3.77 3.77 0 0 1 2 14.228V10c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 2.545C5.8 2 7.2 2 10 2h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185M9.295 9.766a1.204 1.204 0 0 1 1.994.471c.635 1.907 3.056 2.479 4.477 1.057l.764-.764a.75.75 0 1 0-1.06-1.06l-.764.764a1.204 1.204 0 0 1-1.995-.471c-.635-1.907-3.056-2.479-4.477-1.057l-.764.764a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"/>
    </svg>
  );
};
