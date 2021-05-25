import React from 'react';
interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactElement;
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, ...rest }, ref) => (
    <label className='group flex items-center text-heading text-sm cursor-pointer'>
      <input
        type='checkbox'
        className='form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading'
        ref={ref}
        {...rest}
      />
      <span className='ml-4 -mt-0.5'>{label}</span>
    </label>
  )
);
