import { MouseEventHandler } from 'react';
import { ButtonLink } from './Buttons';
import { ProgressBar } from './ProgressBar';

interface UploadMovieProgressIndicatorProps {
  isLoading: boolean;
  isCompleted: boolean;
  hasError: boolean;
  progress: number;
  handleOnCancel: MouseEventHandler;
  handleOnError: MouseEventHandler;
}
export function UploadMovieProgressIndicator({
  isLoading,
  isCompleted,
  hasError,
  progress,
  handleOnError,
  handleOnCancel,
}: UploadMovieProgressIndicatorProps) {
  let progressText = '';
  let progressColor = 'bg-primary';
  if (isLoading && !hasError) {
    progressText = `Cargando ${progress}%`;
  } else if (hasError) {
    progressText = '¡ERROR! no se pudo cargar la película';
    progressColor = 'bg-error';
  }

  return (
    <>
      {isLoading && (
        <>
          <span className='block text-[14px] tracking-[4px] md:text-[14px] mb-4 font-bold leading-4 md:leading-[14px]'>
            {progressText}
          </span>
          <ProgressBar progress={progress} color={progressColor} />
          {!isCompleted && !hasError && (
            <div className='flex w-full justify-end mt-4'>
              <ButtonLink onClick={handleOnCancel}>Cancelar</ButtonLink>
            </div>
          )}
          {hasError && (
            <div className='flex w-full justify-end mt-4'>
              <ButtonLink onClick={handleOnError}>Reintentar</ButtonLink>
            </div>
          )}
        </>
      )}
      {isCompleted && !hasError && (
        <div className='flex w-full justify-end mt-4 font-base text-primary font-bold tracking-[4px] leading-4'>
          ¡Listo!
        </div>
      )}
    </>
  );
}
