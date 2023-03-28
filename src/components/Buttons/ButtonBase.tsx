import { ButtonProps } from '@/interfaces/button_props';

export default function ButtonBase({
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`uppercase tracking-[4px] leading-[22px] text-[18px] ${className}`}
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
