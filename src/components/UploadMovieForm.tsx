import { useModalContext } from '@/context/modal-context';
import { useState } from 'react';
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

  const [isLoading, setIsLoading] = useState(false);
  const [progressColor, setProgressColor] = useState('bg-primary');
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(50);
  const [file, setFile] = useState<File | null>(null);
  const [movieTitle, setMovieTitle] = useState('');

  const handleFileDrop = (file: File) => {
    setIsLoading(true);
    setFile(file);

    // Simulación progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsCompleted(true);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);
  };

  const handleMovieTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(e.target.value);
  };

  const handleUploadMovie = () => {
    if (file && movieTitle) {
      localStorage.setItem(
        'uploadedMovie',
        JSON.stringify({ fileName: file.name, title: movieTitle })
      );
    }
  };

  return (
    <>
      <h1 className='text-center text-primary md:text-xl text-[22px]'>
        Agregar Película
      </h1>
      {!isLoading && <FileDropZone onFileDrop={handleFileDrop} />}
      <div className='w-full mt-[60px]'>
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
      </div>
      <div className='flex justify-center mt-4 mb-4'>
        <input
          type='text'
          name='movieTitle'
          id='movieTitle'
          className='w-full max-w-[248px] text-center py-2 border-b-[1px] border-white bg-transparent text-white placeholder-white focus:placeholder-transparent text-base tracking-[4px] focus:outline-none'
          placeholder='Título'
          onChange={handleMovieTitleChange}
        />
      </div>

      <div className='flex justify-center mt-12'>
        <Button buttonType={BUTTON_PRIMARY} onClick={handleUploadMovie}>
          Subir Película
        </Button>
      </div>
      <div className='flex justify-center mt-6 md:hidden'>
        <Button buttonType={BUTTON_SECONDARY} onClick={toggleModal}>
          Salir
        </Button>
      </div>
    </>
  );
}
