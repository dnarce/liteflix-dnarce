import { useState } from 'react';
import { UploadMovieForm } from './UploadMovieForm';
import { SuccessMovieSaved } from './SuccessMovieSaved';

export function MovieUploader() {
  const [isMovieSaved, setIsMovieSaved] = useState(false);
  const [movieTitle, setMovieTitle] = useState('');

  return (
    <>
      {!isMovieSaved && (
        <UploadMovieForm
          onMovieSaved={(title: string) => {
            setMovieTitle(title);
            setIsMovieSaved(true);
          }}
        />
      )}
      {isMovieSaved && (
        <SuccessMovieSaved
          originaTitle={movieTitle}
          setIsMovieSaved={setIsMovieSaved}
        />
      )}
    </>
  );
}
