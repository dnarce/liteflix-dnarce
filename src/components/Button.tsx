import classNames from 'classnames';

export const BUTTON_PRIMARY = 'primary';
export const BUTTON_SECONDARY = 'secondary';
export const BUTTON_LINK = 'link';

interface ButtonProps {
  icon?: JSX.Element;
  buttonType: string;
  onClick?: Function;
  children: React.ReactNode;
  className?: string;
}
export function Button({
  icon,
  buttonType = BUTTON_PRIMARY,
  children,
  className,
}: ButtonProps) {
  const buttonClass = classNames('uppercase tracking-widest', className, {
    'bg-opacity-50': buttonType === BUTTON_SECONDARY,
    'bg-[#242424] border-[1px] border-white':
      buttonType === BUTTON_SECONDARY || buttonType === BUTTON_PRIMARY,
    'w-[248px] h-[56px]': buttonType !== BUTTON_LINK,
  });
  return (
    //TODO: Fixear el centrado del texto con el svg 😭
    <button className={buttonClass}>
      <div className='inline-flex items-center justify-center align-middle'>
        {icon}
        <span className='ml-2 py-0'>{children}</span>
      </div>
    </button>
  );
}
