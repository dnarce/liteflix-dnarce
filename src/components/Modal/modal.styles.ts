import classNames from 'classnames';

export const modalClasses = classNames(
  'fixed',
  'inset-0',
  'flex',
  'items-center',
  'justify-center',
  'md:p-4',
  'bg-black',
  'bg-opacity-50',
  'transition-opacity',
  'z-50'
);

export const contentClasses = classNames(
  'w-full',
  'h-full',
  'md:max-h-[440px]',
  'md:max-w-[730px]',
  'md:items-center',
  'flex',
  'flex-col',
  'justify-center',
  'md:block',
  'px-4',
  'md:px-16',
  'py-4',
  'md:py-6',
  'bg-dark-grey',
  'transition-all',
  'duration-300',
  'transition-transform',
  'transform',
  'origin-bottom'
);

export const closeButtonContainerClasses = classNames(
  'md:flex',
  'w-full',
  'justify-end',
  'hidden'
);
