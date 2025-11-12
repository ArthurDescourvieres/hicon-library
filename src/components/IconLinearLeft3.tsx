import React from 'react';

export interface IconLinearLeft3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearLeft3: React.FC<IconLinearLeft3Props> = ({
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
      <path fill="#414141" d="M22 12.75a.75.75 0 0 0 0-1.5zm-11-1.5a.75.75 0 0 0 0 1.5zm0 3.615h-.75zm-3.22 1.584.458-.594zm0-8.899.458.595zM11 9.135h.75zm-6.941 1.28.457.594zm0 3.17-.458.594zM22 12v-.75H11v1.5h11zM4.06 10.415l.457.594 3.722-2.864-.458-.595-.457-.594L3.6 9.821zM11 9.135h-.75v5.73h1.5v-5.73zM7.78 16.45l.458-.594-3.722-2.865-.457.595-.458.594 3.722 2.865zM11 14.865h-.75c0 1.037-1.19 1.623-2.012.99l-.458.594-.457.595c1.808 1.392 4.427.103 4.427-2.18zM7.78 7.55l.458.595c.822-.633 2.012-.047 2.012.99h1.5c0-2.282-2.62-3.57-4.427-2.179zm-3.72 2.865-.46-.594a2.75 2.75 0 0 0 0 4.358l.458-.594.457-.595a1.25 1.25 0 0 1 0-1.98z"/>
    </svg>
  );
};
