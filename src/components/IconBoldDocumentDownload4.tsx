import React from 'react';

export interface IconBoldDocumentDownload4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldDocumentDownload4: React.FC<IconBoldDocumentDownload4Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C3 18.625 3 16.749 3 13v-2c0-.839 0-1.584.01-2.25h.07c.853 0 1.372 0 1.82-.07A5.75 5.75 0 0 0 9.68 3.9c.07-.448.07-.967.07-1.82v-.07C10.416 2 11.161 2 12 2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11m-8.25-2a.75.75 0 0 0-1.5 0v6.936l-.043-.034c-.323-.26-.707-.645-1.276-1.22l-1.398-1.41a.75.75 0 1 0-1.066 1.056l1.429 1.441c.531.536.974.984 1.371 1.302.417.335.854.59 1.388.657q.345.045.69 0c.534-.068.971-.322 1.388-.657.397-.319.84-.766 1.371-1.302l1.429-1.441a.75.75 0 0 0-1.066-1.056l-1.398 1.41c-.57.575-.953.96-1.276 1.22l-.043.034z" clip-rule="evenodd"/><path fill="currentColor" d="M4.665 7.198c-.309.049-.69.052-1.6.052.095-1.44.326-2.412.89-3.189A5 5 0 0 1 5.06 2.955c.777-.564 1.75-.795 3.189-.89 0 .91-.003 1.291-.052 1.6a4.25 4.25 0 0 1-3.533 3.533"/>
    </svg>
  );
};
