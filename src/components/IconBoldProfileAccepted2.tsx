import React from 'react';

export interface IconBoldProfileAccepted2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldProfileAccepted2: React.FC<IconBoldProfileAccepted2Props> = ({
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
      <path fill="currentColor" d="M5.25 5.75a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m-3 11A4.75 4.75 0 0 1 7 12h6a4.75 4.75 0 0 1 4.45 3.084l-.31.345c-.694.776-1.084 1.205-1.39 1.466-.306-.261-.696-.69-1.39-1.466l-.87-.97a2 2 0 0 0-2.98 2.667l.947 1.058c.6.67 1.183 1.322 1.737 1.788.52.436 1.178.855 2.012.986-.66.346-1.41.542-2.206.542H7a4.75 4.75 0 0 1-4.75-4.75"/><path fill="currentColor" d="M22.559 13.5a.75.75 0 0 0-1.118-1l-3.369 3.763c-.683.762-1.142 1.273-1.535 1.604-.375.314-.595.383-.787.383s-.412-.069-.787-.383c-.393-.33-.852-.842-1.535-1.604l-.87-.97a.75.75 0 0 0-1.117 1l.906 1.012c.636.71 1.167 1.303 1.651 1.71.513.43 1.066.735 1.752.735s1.239-.304 1.752-.735c.484-.407 1.015-1 1.65-1.71z"/>
    </svg>
  );
};
