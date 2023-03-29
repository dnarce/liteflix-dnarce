import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ModalContextProvider } from '@/context/modal-context';
import { LocalMoviesContexProvider } from '@/context/local-movies-context';
import { MotionEffectsProvider } from '@/context/motion-effects-context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MotionEffectsProvider>
      <ModalContextProvider>
        <LocalMoviesContexProvider>
          <Component {...pageProps} />
        </LocalMoviesContexProvider>
      </ModalContextProvider>
    </MotionEffectsProvider>
  );
}
