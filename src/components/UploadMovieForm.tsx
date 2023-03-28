import { useLocalMoviesContext } from '@/context/local-movies-context';
import { useModalContext } from '@/context/modal-context';
import { getRandomNumber } from '@/utils/mathUtils';
import { saveMovieToLocalStorage } from '@/utils/movieStorage';
import { useState } from 'react';
import { ButtonInverse, ButtonSecondary } from './Buttons';
import { FileDropZone } from './FileDropZone';

import { UploadMovieProgressIndicator } from './UploadMovieProgressIndicator';

interface UploadMovieFormProps {
  onMovieSaved: (title: string) => void;
}

export function UploadMovieForm({ onMovieSaved }: UploadMovieFormProps) {
  const { toggleModal } = useModalContext();
  const { localMovies, setLocalMovies } = useLocalMoviesContext();

  const [isLoading, setIsLoading] = useState(false);
  const [shouldCancelProcess, setShouldCancelProcess] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [originalTitle, setOriginalTitle] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isButtonSaveDisabled, setIsButtonSaveDisabled] = useState(true);

  const resetForm = () => {
    setIsLoading(false);
    setIsCompleted(false);
    setProgress(0);
    setFile(null);
    setOriginalTitle('');
    setShouldCancelProcess(false);
    setIsButtonSaveDisabled(true);
  };

  const handleFileDrop = (file: File) => {
    setIsLoading(true);
    setFile(file);

    // Simulación progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsCompleted(true);
          setIsButtonSaveDisabled(false);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);
  };

  const handleOriginalTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOriginalTitle(e.target.value);
  };

  const handleUploadMovie = async () => {
    if (file && originalTitle) {
      try {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          const localBackdropPath = reader.result;

          if (typeof localBackdropPath === 'string') {
            const id = getRandomNumber(1, 500);
            const newMovie = {
              id,
              originalTitle,
              localBackdropPath,
            };
            saveMovieToLocalStorage(newMovie);
            setLocalMovies([...localMovies, newMovie]);

            onMovieSaved(originalTitle);
            resetForm();
          } else {
            console.error(
              'Error converting file to base64 string:',
              localBackdropPath
            );
          }
        };
        reader.onerror = (error) => {
          console.error('Error reading file:', error);
        };
      } catch (error) {
        console.error('Error converting file to image element:', error);
      }
    }
  };

  return (
    <>
      <h1 className='text-center text-primary md:text-xl text-[22px]'>
        Agregar Película
      </h1>
      {!isLoading && <FileDropZone onFileDrop={handleFileDrop} />}
      <div className='w-full mt-[60px]'>
        <UploadMovieProgressIndicator
          isCompleted={isCompleted}
          isLoading={isLoading}
          progress={progress}
          hasError={hasError}
          handleOnCancel={() => {
            setShouldCancelProcess(true);
          }}
          handleOnError={resetForm}
        />
      </div>
      <div className='flex justify-center mt-4 mb-4'>
        <input
          type='text'
          name='originalTitle'
          id='originalTitle'
          className='w-full max-w-[248px] text-center py-2 border-b-[1px] border-white bg-transparent text-white placeholder-white focus:placeholder-transparent text-base tracking-[4px] focus:outline-none'
          placeholder='Título'
          onChange={handleOriginalTitleChange}
        />
      </div>

      <div className='flex justify-center mt-12'>
        <ButtonInverse
          onClick={handleUploadMovie}
          disabled={isButtonSaveDisabled}
        >
          Subir Película
        </ButtonInverse>
      </div>
      <div className='flex justify-center mt-6 md:hidden'>
        <ButtonSecondary onClick={toggleModal}>Salir</ButtonSecondary>
      </div>
    </>
  );
}
