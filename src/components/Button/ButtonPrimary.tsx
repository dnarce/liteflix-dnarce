import classNames from 'classnames';
import { MouseEventHandler, ButtonHTMLAttributes } from 'react';
import ButtonBase from './ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  children?: React.ReactNode;
}

export default function ButtonPrimary({ className, ...props }: ButtonProps) {
  const buttonPrimaryClassName = classNames(
    className,
    'bg-dark-grey',
    'border-[1px]',
    'border-white',
    'w-[248px]',
    'h-[56px]'
  );
  return <ButtonBase className={buttonPrimaryClassName} {...props} />;
}