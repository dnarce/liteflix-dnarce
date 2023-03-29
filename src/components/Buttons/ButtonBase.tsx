import { ButtonProps } from '@/interfaces/button_props';
import classNames from 'classnames';

export default function ButtonBase({
  icon,
  children,
  className,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        className,
        'hover:brightness-150',
        'active:brightness-125',
        'uppercase',
        'tracking-[4px]',
        'leading-[22px]',
        'text-[18px]',
        { 'bg-opacity-50': disabled }
      )}
      disabled={disabled}
      {...props}
    >
      <div className='inline-flex items-center justify-center align-middle'>
        {icon}
        <div className='ml-2 flex items-center h-8'>
          <span className='mt-1'>{children}</span>
        </div>
      </div>
    </button>
  );
}
