import { LiteFlixMovie } from '@/interfaces/movies';
import { createContext, useContext, useState } from 'react';

interface LocalMoviesProps {
  localMovies: LiteFlixMovie[];
  setLocalMovies: Function;
}

interface LocalMoviesProviderProps {
  children: React.ReactNode;
}

const LocalMoviesContext = createContext<LocalMoviesProps>({
  localMovies: [],
  setLocalMovies: () => {},
});

export function LocalMoviesContexProvider({
  children,
}: LocalMoviesProviderProps) {
  const [localMovies, setLocalMovies] = useState([]);

  return (
    <LocalMoviesContext.Provider value={{ localMovies, setLocalMovies }}>
      {children}
    </LocalMoviesContext.Provider>
  );
}

export const useLocalMoviesContext = () => useContext(LocalMoviesContext);
