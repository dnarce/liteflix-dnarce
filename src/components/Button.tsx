import classNames from 'classnames';
import { MouseEventHandler } from 'react';

export const BUTTON_PRIMARY = 'primary';
export const BUTTON_SECONDARY = 'secondary';
export const BUTTON_LINK = 'link';

interface ButtonProps {
  icon?: JSX.Element;
  buttonType: string;
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
  className?: string;
}
export function Button({
  icon,
  buttonType = BUTTON_PRIMARY,
  children,
  className,
  onClick = () => {},
}: ButtonProps) {
  const buttonClass = classNames('uppercase tracking-widest', className, {
    'bg-opacity-50': buttonType === BUTTON_SECONDARY,
    'bg-dark-grey border-[1px] border-white':
      buttonType === BUTTON_SECONDARY || buttonType === BUTTON_PRIMARY,
    'w-[248px] h-[56px]': buttonType !== BUTTON_LINK,
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      <div className='inline-flex items-center justify-center align-middle'>
        {icon}
        <div className='ml-2 flex items-center h-8'>
          <span className='mt-1'>{children}</span>
        </div>
      </div>
    </button>
  );
}
