import React from 'react';

export interface IconLinearVirusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearVirus: React.FC<IconLinearVirusProps> = ({
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
      <path stroke="#414141" stroke-linecap="round" stroke-width="1.5" d="M12 17v5m0-5a4.98 4.98 0 0 0 3.5-1.43M12 17a4.98 4.98 0 0 1-3.5-1.43M10 22h4M7 12H2m5 0a4.98 4.98 0 0 1 1.5-3.57M7 12a4.98 4.98 0 0 0 1.5 3.57M2 10v4m15-2h5m-5 0a5 5 0 0 0-1.5-3.57M17 12a5 5 0 0 1-1.5 3.57M22 14v-4M12 7V2m0 5a4.98 4.98 0 0 0-3.5 1.43M12 7a4.98 4.98 0 0 1 3.5 1.43M10 2h4m5.657 17.657L16 16l-.5-.43m2.743 5.501 2.828-2.828M4.414 4.414 8 8l.5.43M5.829 3 3 5.828m16.657-1.414L16 8l-.5.43M18.243 3l2.828 2.828M4.415 19.657 8 16l.5-.43m-2.671 5.501L3 18.243"/>
    </svg>
  );
};
