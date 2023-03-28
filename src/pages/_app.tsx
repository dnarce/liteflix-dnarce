import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ModalContextProvider } from '@/context/modal-context';
import { LocalMoviesContexProvider } from '@/context/local-movies-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <LocalMoviesContexProvider>
        <Component {...pageProps} />
      </LocalMoviesContexProvider>
    </ModalContextProvider>
  );
}
