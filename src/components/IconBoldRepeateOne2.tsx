import React from 'react';

export interface IconBoldRepeateOne2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldRepeateOne2: React.FC<IconBoldRepeateOne2Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M13.414 2.532a.75.75 0 0 1 1.055-.118l1.25 1c.968.775.42 2.336-.82 2.336H11c-1.92 0-2.702.01-3.313.208a4.25 4.25 0 0 0-2.729 2.729C4.759 9.298 4.75 10.08 4.75 12s.01 2.702.208 3.313a.75.75 0 0 1-1.427.464c-.281-.868-.281-1.909-.281-3.615v-.324c0-1.706 0-2.747.281-3.615a5.75 5.75 0 0 1 3.692-3.692c.868-.281 1.909-.281 3.615-.281h3.524l-.83-.664a.75.75 0 0 1-.118-1.054" clip-rule="evenodd"/><path fill="currentColor" d="M19.524 7.742a.75.75 0 0 1 .945.481c.281.868.281 1.909.281 3.615v.324c0 1.706 0 2.747-.281 3.615a5.75 5.75 0 0 1-3.692 3.692c-.868.281-1.909.281-3.615.281h-2.174q-.714.001-1.276-.004l.784.692a.75.75 0 1 1-.992 1.125L8.23 20.44c-.519-.457-.374-1.118-.234-1.422.144-.313.526-.806 1.159-.784A60 60 0 0 0 11 18.25h2c1.92 0 2.702-.01 3.313-.208a4.25 4.25 0 0 0 2.729-2.729c.199-.611.208-1.393.208-3.313s-.01-2.702-.208-3.313a.75.75 0 0 1 .481-.945"/><path fill="currentColor" d="M10.47 8.47c.841-.842 2.28-.246 2.28.944V15a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 0 1-1.06-1.06z"/>
    </svg>
  );
};
