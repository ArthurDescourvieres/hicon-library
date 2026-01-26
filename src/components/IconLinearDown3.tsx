import React from 'react';

export interface IconLinearDown3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearDown3: React.FC<IconLinearDown3Props> = ({
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
      <path fill="currentColor" d="M12.75 3a.75.75 0 0 0-1.5 0zm-1.5 11a.75.75 0 0 0 1.5 0zm3.615 0v-.75zm1.584 3.22-.594-.457zm-8.899 0 .595-.457zM9.135 14v.75zm1.28 6.941-.594.458zm3.17 0 .594.458zM12 3h-.75v11h1.5V3zm-1.585 17.941.594-.457-2.864-3.722-.595.458-.594.457L9.821 21.4zM9.135 14v.75h5.73v-1.5h-5.73zm7.314 3.22-.594-.457-2.865 3.72.595.458.594.458 2.865-3.722zM14.865 14v.75c1.037 0 1.623 1.19.99 2.012l.594.458.595.457c1.392-1.808.103-4.427-2.18-4.427zM7.55 17.22l.595-.457c-.633-.823-.047-2.013.99-2.013v-1.5c-2.282 0-3.57 2.62-2.179 4.427zm2.865 3.721-.594.458a2.75 2.75 0 0 0 4.358 0l-.594-.458-.595-.457c-.5.65-1.48.65-1.98 0z"/>
    </svg>
  );
};
