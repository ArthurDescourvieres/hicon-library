import React from 'react';

export interface IconLinearVolumeMuteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearVolumeMute: React.FC<IconLinearVolumeMuteProps> = ({
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
      <path stroke="#414141" stroke-width="1.5" d="M6 11.158c0-.264 0-.396.012-.506a2 2 0 0 1 1.766-1.765c.11-.013.242-.013.506-.013.251 0 .377 0 .499-.006a5 5 0 0 0 2.743-.985c.098-.073.195-.153.389-.312l.996-.821c2.422-1.997 3.633-2.995 4.649-2.699a2 2 0 0 1 .566.267C19 4.914 19 6.483 19 9.622v4.219c0 3.139 0 4.708-.874 5.303a2 2 0 0 1-.566.267c-1.016.296-2.227-.702-4.649-2.698l-.996-.821c-.194-.16-.29-.24-.389-.313a5 5 0 0 0-2.743-.985c-.122-.006-.248-.006-.5-.006-.263 0-.395 0-.505-.012a2 2 0 0 1-1.766-1.765C6 12.7 6 12.568 6 12.305z"/>
    </svg>
  );
};
