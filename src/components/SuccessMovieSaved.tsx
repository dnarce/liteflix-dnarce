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
    <>
      <div className='flex justify-center'>
        <LiteflixLogo />
      </div>
      <h1 className='text-center text-white md:text-xl text-2xl font-bold tracking-[4px] leading-[26px] md:mt-[72px]'>
        ¡Felicitaciones!
      </h1>
      <p className='text-xl tracking-[4px] leading-6 text-center md:mt-6'>{`${originaTitle} fue correctamente subida.`}</p>
      <div className='flex justify-center md:mt-[92px]'>
        <ButtonInverse
          onClick={(e) => {
            toggleModal(e);
            setIsMovieSaved(false);
          }}
        >
          Ir a Home
        </ButtonInverse>
      </div>
    </>
  );
}
