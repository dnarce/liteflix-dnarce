import { useModalContext } from '@/context/modal-context';
import { ButtonInverse } from './Buttons';
import { LiteflixLogo } from './LiteflixLogo';

interface SuccessMovieSavedProps {
  originaTitle: string;
  setIsMovieSaved: Function;
}
export function SuccessMovieSaved({
  originaTitle,
  setIsMovieSaved,
}: SuccessMovieSavedProps) {
  const { toggleModal } = useModalContext();

  return (
    <div className='flex flex-col h-full items-center'>
      <div className='mt-8 w-full flex justify-center'>
        <LiteflixLogo />
      </div>
      <div className='flex-grow flex flex-col items-center justify-center'>
        <h1 className='text-center text-white md:text-xl text-2xl font-bold tracking-[4px] leading-[26px]'>
          ¡Felicitaciones!
        </h1>
        <p className='text-xl tracking-[4px] leading-6 text-center mt-8 md:mt-6'>
          {`${originaTitle} fue correctamente subida.`}
        </p>
        <div className='mt-[133px] md:mt-6'>
          <ButtonInverse
            onClick={(e) => {
              toggleModal(e);
              setIsMovieSaved(false);
            }}
          >
            Ir a Home
          </ButtonInverse>
        </div>
      </div>
    </div>
  );
}
