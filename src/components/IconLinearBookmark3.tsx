import React from 'react';

export interface IconLinearBookmark3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearBookmark3: React.FC<IconLinearBookmark3Props> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M12 3.75c1.92 0 2.702.01 3.313.208a4.25 4.25 0 0 1 2.729 2.729c.199.611.208 1.393.208 3.313v7.388c0 .971 0 1.655-.04 2.16-.041.522-.118.72-.174.803a1.25 1.25 0 0 1-1.18.543c-.099-.012-.299-.083-.721-.391-.41-.3-.93-.744-1.667-1.376-.59-.506-1.036-.903-1.552-1.086a2.75 2.75 0 0 0-1.832 0c-.516.183-.961.58-1.552 1.086-.737.632-1.257 1.077-1.667 1.376-.422.308-.623.38-.721.39a1.25 1.25 0 0 1-1.18-.542c-.056-.083-.133-.28-.174-.802-.04-.506-.04-1.19-.04-2.161V10c0-1.92.01-2.702.208-3.313a4.25 4.25 0 0 1 2.729-2.729C9.298 3.759 10.08 3.75 12 3.75Z"/>
    </svg>
  );
};
