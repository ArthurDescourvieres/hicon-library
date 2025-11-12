import React from 'react';

export interface IconLinearBag8Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const IconLinearBag8: React.FC<IconLinearBag8Props> = ({
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
      <path fill="#2D264B" fill-rule="evenodd" d="M12 .25a5.75 5.75 0 0 0-5.702 5h-.662c-.996 0-1.821 0-2.47.09-.68.096-1.293.306-1.758.826S.8 7.318.78 8.006c-.018.653.073 1.474.183 2.464l.308 2.77c.23 2.07.41 3.697.718 4.96.314 1.296.782 2.307 1.65 3.085.87.777 1.931 1.13 3.26 1.3 1.298.165 2.947.165 5.046.165h.107c2.1 0 3.749 0 5.046-.165 1.33-.17 2.391-.523 3.26-1.3.869-.778 1.337-1.789 1.651-3.084.307-1.264.488-2.89.718-4.96l.308-2.771c.11-.99.2-1.81.182-2.465-.019-.687-.16-1.319-.626-1.839s-1.077-.73-1.759-.826c-.648-.09-1.473-.09-2.469-.09H17.7a5.75 5.75 0 0 0-5.7-5m0 1.5a4.25 4.25 0 0 1 4.184 3.5H7.816A4.25 4.25 0 0 1 12 1.75m-6 7.5a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
    </svg>
  );
};
