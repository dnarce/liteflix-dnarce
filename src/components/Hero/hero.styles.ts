import classNames from 'classnames';

export const heroSectionClasses = classNames(
  'relative',
  'flex',
  'items-end',
  'md:items-center',
  'justify-center',
  'md:justify-start',
  'min-h-screen',
  'pb-4',
  'md:pb-0',
  'overflow-hidden'
);

export const heroImageClasses = classNames(
  'absolute',
  'bottom-0',
  'left-0',
  'w-screen',
  'h-screen',
  'bg-no-repeat',
  'bg-center',
  'object-cover'
);

export const heroGradientClasses = classNames(
  'absolute',
  'bottom-0',
  'left-0',
  'w-full',
  'h-1/3',
  'bg-gradient-to-t',
  'from-dark-grey',
  'to-transparent',
  'lg:invisible'
);

export const heroLiteflixOriginalClasses = classNames(
  'text-[20px]',
  'uppercase',
  'font-light',
  'tracking-[4px]',
  'md:self-start'
);

export const heroOriginalTitleClasses = classNames(
  'text-[76px]',
  'text-primary',
  'font-bold',
  'uppercase',
  'tracking-[12px]',
  'md:tracking-[16px]',
  'leading-none'
);

export const heroBodyContainerClasses = classNames(
  'text-center',
  'md:text-left',
  'md:pl-24',
  'text-white',
  'z-10',
  'md:absolute',
  'md:bottom-0',
  'md:mb-40',
  'w-1/3-screen',
  'container'
);
