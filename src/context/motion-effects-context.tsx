import { createContext, useContext } from 'react';

const motionEffects = {
  hero: {
    heroImageEffect: {
      initial: { scale: 1.2 },
      animate: { scale: 1, transition: { duration: 20 } },
    },
    heroLiteflixOriginalEffect: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    heroOriginalTitleEffect: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    },
    buttonsEffects: {
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    },
  },
  card: {
    cardContainerEffect: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: {
        opacity: { duration: 1.2, delay: 0.5 },
        y: { duration: 0.75, delay: 0.5 },
      },
    },
  },
};

const MotionEffectsContext = createContext(motionEffects);

interface MotionEffectsProviderProps {
  children: React.ReactNode;
}

export const MotionEffectsProvider = ({
  children,
}: MotionEffectsProviderProps) => {
  return (
    <MotionEffectsContext.Provider value={motionEffects}>
      {children}
    </MotionEffectsContext.Provider>
  );
};

export const useMotionEffectsContext = () => useContext(MotionEffectsContext);
