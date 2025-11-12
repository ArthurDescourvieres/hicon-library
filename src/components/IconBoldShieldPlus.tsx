import React from 'react';

export interface IconBoldShieldPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldShieldPlus: React.FC<IconBoldShieldPlusProps> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M6.771 4.042A2.79 2.79 0 0 1 9.563 1.25h5.166a2.5 2.5 0 0 1 2.5 2.5 1 1 0 0 0 1 1h.59c1.584 0 2.978 1.23 2.914 2.916-.083 2.16-.503 5.627-2.186 8.695-.457.831-1.066 1.648-1.725 2.41l-.05.057c-.947 1.095-1.737 2.008-2.587 2.63-.913.67-1.889 1.003-3.185 1.003s-2.271-.334-3.185-1.003c-.85-.622-1.64-1.535-2.587-2.63l-.05-.058c-.659-.76-1.268-1.578-1.724-2.41-1.63-2.968-2.076-6.102-2.178-8.114-.085-1.693 1.319-2.913 2.895-2.913h.309c.713 0 1.291-.578 1.291-1.291M12.751 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"/>
    </svg>
  );
};
