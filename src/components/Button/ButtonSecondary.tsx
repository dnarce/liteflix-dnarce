import classNames from 'classnames';
import { MouseEventHandler, ButtonHTMLAttributes } from 'react';
import ButtonBase from './ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  children?: React.ReactNode;
}

export default function ButtonSecondary({ className, ...props }: ButtonProps) {
  const buttonSecondaryClassName = classNames(
    className,
    'bg-opacity-50',
    'bg-dark-grey',
    'border-[1px]',
    'border-white',
    'w-[248px]',
    'h-[56px]'
  );
  return <ButtonBase className={buttonSecondaryClassName} {...props} />;
}
