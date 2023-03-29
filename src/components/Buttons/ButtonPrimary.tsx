import { ButtonProps } from '@/interfaces/button_props';
import classNames from 'classnames';
import ButtonBase from './ButtonBase';

export default function ButtonPrimary({ className, ...props }: ButtonProps) {
  const buttonPrimaryClassName = classNames(
    className,
    'bg-dark-grey',
    'w-[248px]',
    'h-[56px]'
  );
  return <ButtonBase className={buttonPrimaryClassName} {...props} />;
}
