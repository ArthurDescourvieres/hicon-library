import React from 'react';

export interface IconBoldGift1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconBoldGift1: React.FC<IconBoldGift1Props> = ({
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
      <path fill="#2D264B" d="m14.89 3.732-2.122 2.122c-.32.32-.658.74-.768 1.146-.11-.407-.291-.827-.61-1.146L9.267 3.732a2.5 2.5 0 0 0-3.536 0c-.88.88-.931 2.29-.223 3.268H12 4.5a2.5 2.5 0 0 0-1.785 4.25h18.57A2.5 2.5 0 0 0 19.5 7h-1.075.258a2.55 2.55 0 0 0-.258-3.268 2.5 2.5 0 0 0-3.536 0M2.981 12.836l-.003-.122h8.272v9.25h-.75c-2.33 0-3.495 0-4.413-.398-1.226-.532-2.199-1.552-2.706-2.835C3 17.768 3 16.548 3 14.107c0-.534-.01-.936-.019-1.271m14.932 8.73c-.918.399-2.083.399-4.413.399h-.75v-9.25h8.244c.006.36.006.792.006 1.392 0 2.441 0 3.661-.38 4.624-.508 1.283-1.481 2.303-2.707 2.835"/>
    </svg>
  );
};
