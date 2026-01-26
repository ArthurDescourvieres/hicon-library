import React from 'react';

export interface IconLinearUp3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearUp3: React.FC<IconLinearUp3Props> = ({
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
      <path fill="currentColor" d="M11.25 22a.75.75 0 0 0 1.5 0zm1.5-11a.75.75 0 0 0-1.5 0zm-3.615 0v.75zM7.55 7.78l-.594-.458zm8.9 0 .594-.458zM14.864 11v-.75zm-1.28-6.941-.595.457zm-3.17 0 .594.457zM12 21.999h.75V11h-1.5v11zm1.585-17.94-.595.457 2.865 3.721.594-.457.595-.458-2.865-3.72zm1.28 6.94v-.75h-5.73v1.5h5.73zM7.55 7.78l.595.458 2.864-3.72-.594-.458-.594-.458-2.865 3.721zM9.135 11v-.75c-1.037 0-1.623-1.19-.99-2.012L7.55 7.78l-.594-.458c-1.392 1.809-.103 4.428 2.18 4.428zm7.314-3.22-.594.458c.633.822.047 2.013-.99 2.013v1.5c2.282 0 3.57-2.62 2.179-4.428zm-2.864-3.72.594-.458a2.75 2.75 0 0 0-4.358 0l.594.458.594.457a1.25 1.25 0 0 1 1.981 0z"/>
    </svg>
  );
};
