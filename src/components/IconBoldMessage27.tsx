import React from 'react';

export interface IconBoldMessage27Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldMessage27: React.FC<IconBoldMessage27Props> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M17.686 21.225c-2.734 1.691-6.102.316-7.69-1.274a7.007 7.007 0 0 1 0-9.9 6.986 6.986 0 0 1 9.888 0c1.656 1.658 2.967 4.969 1.272 7.7a2 2 0 0 0-.163.284.63.63 0 0 0-.048.313c.005.062.023.132.059.272.228.88.342 1.32.277 1.638a1.4 1.4 0 0 1-1.091 1.093c-.317.064-.757-.05-1.636-.278a2 2 0 0 0-.271-.06.63.63 0 0 0-.312.048c-.057.022-.133.07-.285.164M12 14.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/><path fill="currentColor" d="M18.579 7.85A7.99 7.99 0 0 0 9.34 9.342a8.01 8.01 0 0 0-1.6 9.026 6 6 0 0 1-.565-.31 3 3 0 0 0-.347-.2.8.8 0 0 0-.378-.057c-.075.006-.16.028-.33.072-1.067.277-1.601.416-1.986.337a1.7 1.7 0 0 1-1.325-1.327c-.079-.385.06-.92.336-1.989.044-.17.066-.255.072-.33a.8.8 0 0 0-.058-.38 3 3 0 0 0-.198-.345c-2.059-3.316-.466-7.337 1.545-9.35a8.483 8.483 0 0 1 12.007 0 8.5 8.5 0 0 1 2.065 3.36"/>
    </svg>
  );
};
