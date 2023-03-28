import { ButtonProps } from '@/interfaces/button_props';
import classNames from 'classnames';
import ButtonBase from './ButtonBase';

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
