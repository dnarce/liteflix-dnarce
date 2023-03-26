import { createContext, MouseEventHandler, useContext, useState } from 'react';

interface ModalContextProps {
  isModalOpen: boolean;
  toggleModal: MouseEventHandler;
}

interface ModalContextProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  toggleModal: () => {},
});

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => useContext(ModalContext);
