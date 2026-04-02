import React from 'react';

export interface IconLinearAuctionProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearAuction: React.FC<IconLinearAuctionProps> = ({
  size = '1em',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#000" stroke="#242424" d="M9.5 16.595v.667h-9v-.667zM16.262 6.48l-.607.607-.59-.196-.293-.098-2.635 2.635.353.353 4.36 4.36-.47.471L11.666 9.9l-2.558 2.558.07.274.166.668-.625.625L2.943 8.25l.625-.625.67.168.275.068 5.663-5.663-.098-.293-.197-.59.606-.607zm-5.54-3.888L4.479 8.838l.352.353 2.946 2.948.354.353.353-.353 5.893-5.892.354-.353-.354-.354-2.945-2.947-.354-.354z"/>
    </svg>
  );
};
