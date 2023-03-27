import { Button, BUTTON_LINK } from './Button';
import { ProgressBar } from './ProgressBar';

interface UploadMovieProgressIndicatorProps {
  isLoading: boolean;
  isCompleted: boolean;
  progress: number;
  progressColor: string;
}
export function UploadMovieProgressIndicator({
  isLoading,
  isCompleted,
  progress,
  progressColor,
}: UploadMovieProgressIndicatorProps) {
  return (
    <>
      {isLoading && (
        <>
          <span className='block text-[14px] tracking-[4px] md:text-[14px] mb-4 font-bold leading-4 md:leading-[14px]'>
            {`Cargando ${progress}%`}
          </span>
          <ProgressBar progress={progress} color={progressColor} />
          {!isCompleted && (
            <div className='flex w-full justify-end mt-4'>
              <Button buttonType={BUTTON_LINK}>Cancelar</Button>
            </div>
          )}
        </>
      )}
      {isCompleted && (
        <div className='flex w-full justify-end mt-4 font-base text-primary font-bold tracking-[4px] leading-4'>
          ¡Listo!
        </div>
      )}
    </>
  );
}
