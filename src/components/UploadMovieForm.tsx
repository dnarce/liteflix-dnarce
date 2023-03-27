import { useModalContext } from '@/context/modal-context';
import {
  Button,
  BUTTON_LINK,
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
} from './Button';
import { FileDropZone } from './FileDropZone';
import { ProgressBar } from './ProgressBar';

export function UploadMovieForm() {
  const { toggleModal } = useModalContext();
  const handleFileDrop = (file: File) => {
    console.log('Archivo seleccionado: ', file);
  };
  return (
    <>
      <h1 className='text-center text-primary md:text-xl text-[22px]'>
        Agregar Película
      </h1>
      <FileDropZone onFileDrop={handleFileDrop} />
      <div className='flex justify-center mt-4 mb-4'>
        <input
          type='text'
          name='movieTitle'
          id='movieTitle'
          className='w-full max-w-[248px] text-center py-2 border-b-[1px] border-white bg-transparent text-white placeholder-white focus:placeholder-transparent text-base tracking-[4px] focus:outline-none'
          placeholder='Título'
        />
      </div>
      <div className='w-full'>
        <span className='block text-[14px] tracking-[4px] md:text-[14px] mb-4 font-bold leading-4 md:leading-[14px]'>
          Cargando 70%
        </span>
        <ProgressBar progress={70} color='bg-error' />
        <div className='flex w-full justify-end mt-4'>
          <Button buttonType={BUTTON_LINK}>Cancelar</Button>
        </div>
        <div className='flex w-full justify-end mt-4 font-base text-primary font-bold tracking-[4px] leading-4'>
          ¡Listo!
        </div>
      </div>
      <div className='flex justify-center mt-12'>
        <Button buttonType={BUTTON_PRIMARY}>Subir Película</Button>
      </div>
      <div className='flex justify-center mt-6 md:hidden'>
        <Button buttonType={BUTTON_SECONDARY} onClick={toggleModal}>
          Salir
        </Button>
      </div>
    </>
  );
}
