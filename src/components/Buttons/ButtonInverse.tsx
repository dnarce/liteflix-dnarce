import classNames from 'classnames';
import { MouseEventHandler, ButtonHTMLAttributes } from 'react';
import ButtonBase from './ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  children?: React.ReactNode;
}

export default function ButtonInverse({ className, ...props }: ButtonProps) {
  const buttonInverseClassName = classNames(
    className,
    'text-dark-grey',
    'bg-white/50',
    'border-white/50',
    'w-[248px]',
    'h-[56px]'
  );
  return <ButtonBase className={buttonInverseClassName} {...props} />;
}
