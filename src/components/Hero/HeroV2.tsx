import useDeviceImageWidth from '@/hooks/useDeviceImageWidth';
import { LiteFlixMovie } from '@/interfaces/movies';
import classNames from 'classnames';
import { ButtonPrimary, ButtonSecondary } from '../Buttons';
import { PlayIcon, PlusIcon } from '../icons';

interface HeroProps {
  movie: LiteFlixMovie;
}
export function HeroV2({ movie }: HeroProps) {
  const { originalTitle, backdropPath, isLiteFlixOriginal = true } = movie;
  const deviceImageWidth = useDeviceImageWidth();
  const backgroundImage = `url('https://image.tmdb.org/t/p/${deviceImageWidth}${backdropPath}')`;
  console.log(backgroundImage);
  return (
    <section>
      <div
        className={classNames(
          'bg-no-repeat',
          'bg-center',
          'bg-cover',
          'h-screen',
          'w-screen'
        )}
        style={{
          backgroundImage,
        }}
      >
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
              <h1
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
              </h1>
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
            <h1
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
            </h1>
          </div>
          <div
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
          </div>
        </div>
      </div>
    </section>
  );
}
