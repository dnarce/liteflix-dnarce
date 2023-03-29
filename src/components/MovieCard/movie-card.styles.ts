import classNames from 'classnames';

export const baseCardContainerClasses = classNames(
  'relative',
  'flex',
  'items-center',
  'justify-center',
  'w-[327px]',
  'h-[172px]',
  'md:w-[220px]',
  'md:h-[146px]',
  'bg-center',
  'bg-no-repeat',
  'bg-cover',
  'rounded',
  'cursor-pointer',
  'group-hover:hidden'
);

export const baseHiddenContainerClasses = classNames(
  'hidden',
  'group-hover:flex',
  'items-center',
  'w-[327px]',
  'h-[172px]',
  'md:w-[220px]',
  'md:h-[146px]',
  'bg-center',
  'bg-no-repeat',
  'bg-cover',
  'rounded',
  'cursor-pointer'
);

export const baseCardShadowClasses = classNames(
  'absolute',
  'bottom-0',
  'left-0',
  'w-full',
  'h-1/3',
  'bg-gradient-to-t',
  'from-black/60',
  'via-black/30',
  'to-opacity-0'
);

export const baseCardBodyClasses = classNames(
  'flex',
  'flex-col',
  'items-center',
  'justify-center',
  'inset-0'
);

export const baseCardTitle = classNames(
  'absolute',
  'bottom-3.5',
  'text-center',
  'w-full',
  'text-ellipsis',
  'overflow-hidden',
  'whitespace-nowrap',
  'px-2'
);

export const baseHiddenCardBody = classNames(
  'p-4',
  'bg-black/50',
  'w-full',
  'h-full',
  'flex',
  'flex-col',
  'justify-end'
);

export const baseHiddenCardContenClasses = classNames(
  'flex',
  'flex-row',
  'items-center',
  'justify-items-center',
  'flex-grow'
);

export const baseHiddenCardTitleClasses = classNames(
  'ml-2',
  'w-full',
  'text-ellipsis',
  'overflow-hidden',
  'whitespace-nowrap'
);

export const baseHiddenCardExtraContentClasses = classNames(
  'flex',
  'flex-row',
  'items-center',
  'justify-items-center',
  'justify-between'
);
