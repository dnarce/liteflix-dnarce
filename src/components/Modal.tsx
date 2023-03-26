import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { Button, BUTTON_LINK } from './Button';
import { CloseIcon } from './icons';

interface ModalProps {
  isOpen: boolean;
  onClose: MouseEventHandler;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalClasses = classNames(
    'fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity z-50',
    {
      'opacity-0 pointer-events-none': !isOpen,
      'opacity-100': isOpen,
    }
  );

  const contentClasses = classNames(
    'w-full h-1/2 max-w-2xl p-6 bg-dark-grey rounded-t-lg transition-all duration-300 transition-transform transform origin-bottom',
    {
      'translate-y-full': !isOpen,
      'translate-y-0': isOpen,
    }
  );

  return (
    <div className={modalClasses}>
      <div
        className={contentClasses}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='flex w-full justify-end'>
          <Button
            buttonType={BUTTON_LINK}
            icon={<CloseIcon />}
            onClick={onClose}
          ></Button>
        </div>
        {children}
      </div>
    </div>
  );
}
