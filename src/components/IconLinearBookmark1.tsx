import React from 'react';

export interface IconLinearBookmark1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearBookmark1: React.FC<IconLinearBookmark1Props> = ({
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
      <path stroke="currentColor" stroke-width="1.5" d="M5 10c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 3 10.139 3 12 3s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 7.208 19 8.139 19 10v7.387c0 1.918 0 2.876-.342 3.383a2 2 0 0 1-1.888.868c-.607-.07-1.335-.694-2.79-1.942-.641-.549-.962-.823-1.314-.948a2 2 0 0 0-1.332 0c-.352.125-.673.4-1.313.948-1.456 1.248-2.184 1.872-2.791 1.942a2 2 0 0 1-1.888-.868C5 20.263 5 19.305 5 17.387z"/>
    </svg>
  );
};
