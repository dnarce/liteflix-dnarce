import { ButtonProps } from '@/interfaces/button_props';
import classNames from 'classnames';
import ButtonBase from './ButtonBase';

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
