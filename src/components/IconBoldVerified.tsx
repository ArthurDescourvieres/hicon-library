import React from 'react';

export interface IconBoldVerifiedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldVerified: React.FC<IconBoldVerifiedProps> = ({
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
      <path fill="currentColor" fill-rule="evenodd" d="M8.436 2.757c1.023-3.586 6.105-3.586 7.128 0a2.207 2.207 0 0 0 2.659 1.535c3.617-.907 6.158 3.494 3.564 6.173a2.207 2.207 0 0 0 0 3.07c2.594 2.68.053 7.08-3.564 6.174a2.207 2.207 0 0 0-2.659 1.535c-1.023 3.585-6.105 3.585-7.128 0a2.207 2.207 0 0 0-2.659-1.535c-3.617.906-6.158-3.495-3.564-6.174a2.207 2.207 0 0 0 0-3.07c-2.594-2.679-.053-7.08 3.564-6.173a2.207 2.207 0 0 0 2.659-1.535m8.14 6.723a.75.75 0 0 0-1.152-.96l-3.464 4.156c-.37.445-.598.716-.786.885a.8.8 0 0 1-.174.127l-.01-.005a.8.8 0 0 1-.164-.122c-.188-.17-.415-.44-.786-.885L8.576 10.92a.75.75 0 0 0-1.152.96l1.495 1.795c.329.394.625.75.902 1 .3.271.68.513 1.179.513.5 0 .879-.242 1.18-.514.276-.25.572-.605.9-.999z" clip-rule="evenodd"/>
    </svg>
  );
};
