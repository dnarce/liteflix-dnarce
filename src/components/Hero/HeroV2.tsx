import useDeviceImageWidth from '@/hooks/useDeviceImageWidth';
import { LiteFlixMovie } from '@/interfaces/movies';
import classNames from 'classnames';
import { ButtonPrimary, ButtonSecondary } from '../Buttons';
import { PlayIcon, PlusIcon } from '../icons';
import { motion } from 'framer-motion';
import { useMotionEffectsContext } from '@/context/motion-effects-context';

interface HeroProps {
  movie: LiteFlixMovie;
}
export function HeroV2({ movie }: HeroProps) {
  const { originalTitle, backdropPath, isLiteFlixOriginal = true } = movie;
  const deviceImageWidth = useDeviceImageWidth();
  const backgroundImage = `https://image.tmdb.org/t/p/${deviceImageWidth}${backdropPath}`;
  const {
    hero: {
      heroImageEffect,
      heroLiteflixOriginalEffect,
      heroOriginalTitleEffect,
      buttonsEffects,
    },
  } = useMotionEffectsContext();

  return (
    <section className='relative overflow-hidden'>
      <motion.img
        className={classNames(
          'absolute',
          'bottom-0',
          'left-0',
          'w-screen',
          'h-screen',
          'bg-no-repeat',
          'bg-center',
          'object-cover'
        )}
        src={backgroundImage}
        initial={heroImageEffect.initial}
        animate={heroImageEffect.animate}
      ></motion.img>
      <div
        className={classNames(
          'absolute',
          'bottom-0',
          'left-0',
          'w-full',
          'h-1/3',
          'bg-gradient-to-t',
          'from-dark-grey',
          'to-transparent',
          'lg:invisible'
        )}
      ></div>
      <motion.div className={classNames('relative', 'h-screen')}>
        <div
          className={classNames(
            'container',
            'mx-auto',
            'px-6',
            'w-full',
            'min-h-screen',
            'flex',
            'flex-col',
            'justify-end',
            'pb-28'
          )}
        >
          {isLiteFlixOriginal && (
            <div
              className={classNames(
                'w-full',
                'flex',
                'flex-col',
                'items-center',
                'md:items-start',
                'lg:max-w-[66%]'
              )}
            >
              <motion.h2
                initial={heroLiteflixOriginalEffect.initial}
                animate={heroLiteflixOriginalEffect.animate}
                className={classNames(
                  'text-[20px]',
                  'font-normal',
                  'uppercase',
                  'tracking-[4px]',
                  'leading-[20px]',
                  'text-center',
                  'md:text-left',
                  'mb-4',
                  'lg:mb-6'
                )}
              >
                Original de Liteflix
              </motion.h2>
            </div>
          )}
          <div
            className={classNames(
              'w-full',
              'flex',
              'flex-col',
              'items-center',
              'md:items-start',
              'lg:max-w-[66%]'
            )}
          >
            <motion.h1
              initial={heroOriginalTitleEffect.initial}
              animate={heroOriginalTitleEffect.animate}
              className={classNames(
                'text-[76px]',
                'md:text-[120px]',
                'text-primary',
                'font-bold',
                'uppercase',
                'tracking-[12px]',
                'md:tracking-[16px]',
                'leading-[78px]',
                'md:leading-[100px]',
                'text-center',
                'md:text-left',
                'mb-4',
                'lg:mb-8'
              )}
            >
              {originalTitle}
            </motion.h1>
          </div>
          <motion.div
            initial={buttonsEffects.initial}
            animate={buttonsEffects.animate}
            className={classNames(
              'flex',
              'flex-col',
              'md:flex-row',
              'items-center',
              'md:items-start',
              'w-full',
              'lg:w-1/3'
            )}
          >
            <ButtonPrimary
              className={classNames('md:mr-6 mb-6')}
              icon={<PlayIcon />}
            >
              Reproducir
            </ButtonPrimary>
            <ButtonSecondary icon={<PlusIcon />}>Mi Lista</ButtonSecondary>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
