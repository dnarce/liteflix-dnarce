import { LiteFlixMovie } from '../../interfaces/movies';
import { ButtonPrimary, ButtonSecondary } from '../Buttons';
import { PlayIcon, PlusIcon } from '../icons';
import { motion } from 'framer-motion';
import { useMotionEffectsContext } from '@/context/motion-effects-context';
import useDeviceImageWidth from '@/hooks/useDeviceImageWidth';
import classNames from 'classnames';
import {
  heroSectionClasses,
  heroImageClasses,
  heroGradientClasses,
  heroLiteflixOriginalClasses,
  heroOriginalTitleClasses,
  heroBodyContainerClasses,
} from './Hero.styles';

interface HeroProps {
  movie: LiteFlixMovie;
}

export function Hero({ movie }: HeroProps) {
  const deviceImageWidth = useDeviceImageWidth();
  const {
    hero: {
      heroImageEffect,
      heroLiteflixOriginalEffect,
      heroOriginalTitleEffect,
      buttonsEffects,
    },
  } = useMotionEffectsContext();
  const { originalTitle, backdropPath, isLiteFlixOriginal = true } = movie;

  return (
    <section className={heroSectionClasses}>
      <motion.img
        className={heroImageClasses}
        src={`https://image.tmdb.org/t/p/${deviceImageWidth}${backdropPath}`}
        initial={heroImageEffect.initial}
        animate={heroImageEffect.animate}
      ></motion.img>
      <div className={heroGradientClasses}></div>
      <div className={heroBodyContainerClasses}>
        {isLiteFlixOriginal && (
          <motion.h2
            initial={heroLiteflixOriginalEffect.initial}
            animate={heroLiteflixOriginalEffect.animate}
            className={heroLiteflixOriginalClasses}
          >
            Original de <span className='font-bold'>LITEFLIX</span>
          </motion.h2>
        )}

        <motion.h1
          initial={heroOriginalTitleEffect.initial}
          animate={heroOriginalTitleEffect.animate}
          className={heroOriginalTitleClasses}
        >
          {originalTitle}
        </motion.h1>
        <motion.div
          initial={buttonsEffects.initial}
          animate={buttonsEffects.animate}
        >
          <ButtonPrimary
            className='mx-6 md:mx-0 md:mr-6 my-4'
            icon={<PlayIcon />}
          >
            Reproducir
          </ButtonPrimary>
          <ButtonSecondary icon={<PlusIcon />}>Mi Lista</ButtonSecondary>
        </motion.div>
      </div>
    </section>
  );
}
