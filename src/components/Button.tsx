import classNames from 'classnames';

interface ButtonProps {
  icon?: JSX.Element;
  isPrimary?: boolean;
  isButtonLink?: boolean;
  onClick?: Function;
  children: React.ReactNode;
  className?: string;
}
export function Button({ icon, isPrimary, children, className }: ButtonProps) {
  const buttonClass = classNames(
    'bg-[#242424] w-[248px] h-[56px] border-[1px] border-white uppercase tracking-widest',
    className,
    {
      'bg-opacity-50': !isPrimary,
    }
  );
  return (
    <button className={buttonClass}>
      <div className='flex flex-row items-center justify-center align-middle'>
        {icon && <span className='pr-2 flex items-center'>{icon}</span>}
        {children}
      </div>
    </button>
  );
}
