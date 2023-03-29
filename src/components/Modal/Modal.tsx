import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';
import { CloseIcon } from '../icons';
import { ButtonLink } from '../Buttons';
import {
  modalClasses,
  contentClasses,
  closeButtonContainerClasses,
} from './modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose: MouseEventHandler;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalContainerClasses = classNames(modalClasses, {
    'opacity-0 pointer-events-none': !isOpen,
    'opacity-100': isOpen,
  });

  const modalContentClasses = classNames(contentClasses, {
    'translate-y-full': !isOpen,
    'translate-y-0': isOpen,
  });

  return (
    <div className={classNames(modalContainerClasses)}>
      <div
        className={modalContentClasses}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={closeButtonContainerClasses}>
          <ButtonLink icon={<CloseIcon />} onClick={onClose}></ButtonLink>
        </div>
        {children}
      </div>
    </div>
  );
}
