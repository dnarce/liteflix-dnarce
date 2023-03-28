import classNames from 'classnames';
import { MouseEventHandler, ButtonHTMLAttributes } from 'react';
import ButtonBase from './ButtonBase';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  children?: React.ReactNode;
}

export default function ButtonLink(props: ButtonProps) {
  return <ButtonBase {...props} />;
}
