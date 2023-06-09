import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { CloseIcon } from '../icons';
import { ButtonLink } from '../Buttons';

interface ModalProps {
  isOpen: boolean;
  onClose: MouseEventHandler;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <div
      className={classNames(
        'fixed',
        'inset-0',
        'flex',
        'items-center',
        'justify-center',
        'md:p-4',
        'bg-black',
        'bg-opacity-50',
        'transition-opacity',
        'z-50',
        {
          'opacity-0 pointer-events-none': !isOpen,
          'opacity-100': isOpen,
        }
      )}
    >
      <div
        className={classNames(
          'w-full',
          'h-full',
          'md:max-h-[440px]',
          'md:max-w-[730px]',
          'md:items-center',
          'flex',
          'flex-col',
          'justify-center',
          'md:block',
          'px-4',
          'md:px-16',
          'py-4',
          'md:py-6',
          'bg-dark-grey',
          'transition-all',
          'duration-300',
          'transition-transform',
          'transform',
          'origin-bottom',
          {
            'translate-y-full': !isOpen,
            'translate-y-0': isOpen,
          }
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className={classNames('md:flex', 'w-full', 'justify-end', 'hidden')}
        >
          <ButtonLink icon={<CloseIcon />} onClick={onClose}></ButtonLink>
        </div>
        {children}
      </div>
    </div>
  );
}
