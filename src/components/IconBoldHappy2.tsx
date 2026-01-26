import React from 'react';

export interface IconBoldHappy2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldHappy2: React.FC<IconBoldHappy2Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8.9 7.255c.419-.236 1.094-.46 1.678.07C11.963 8.58 9.588 11 8.5 11S5.037 8.58 6.422 7.325c.584-.53 1.26-.306 1.678-.07a.85.85 0 0 0 .8 0m8.678.07c-.584-.53-1.26-.306-1.678-.07a.85.85 0 0 1-.8 0c-.419-.236-1.094-.46-1.678.07C12.037 8.58 14.412 11 15.5 11s3.463-2.42 2.078-3.675M12 19c-1.701 0-3.168-1.364-4.115-2.616-.453-.598.01-1.384.76-1.384h6.71c.75 0 1.213.786.76 1.384C15.168 17.636 13.701 19 12 19" clip-rule="evenodd"/>
    </svg>
  );
};
