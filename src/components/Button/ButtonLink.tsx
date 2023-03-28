import classNames from 'classnames';
import { MouseEventHandler, ButtonHTMLAttributes } from 'react';
import ButtonBase from './ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  children?: React.ReactNode;
}

export default function ButtonLink({ className, ...props }: ButtonProps) {
  const buttonLinkClassName = classNames(className, 'w-[248px]', 'h-[56px]');
  return <ButtonBase className={buttonLinkClassName} {...props} />;
}
