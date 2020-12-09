import disableScroll from 'disable-scroll';
import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

const Modal = ({ children, isOpen = false, close, elementId = 'root' }) => {
  if (isOpen === false) {
    return null;
  }
  return createPortal(
    <div className="wrapperStyle">
      <div className="maskStyle" onClick={close} />
      <div className="containerStyle">{children}</div>
    </div>,
    document.getElementById(elementId)
  );
};

const useModal = (elementId = 'root', options = {}) => {
  const { preventScroll = false } = options;
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => {
    setOpen(true);
    if (preventScroll) {
      disableScroll.on();
    }
  }, [setOpen, preventScroll]);
  const close = useCallback(() => {
    setOpen(false);
    if (preventScroll) {
      disableScroll.off();
    }
  }, [setOpen, preventScroll]);

  const ModalWrapper = useCallback(({ children }) => {
    return (
      <Modal isOpen={isOpen} close={close} elementId={elementId}>
        {children}
      </Modal>
    )
  }, [isOpen, close, elementId]);

  return [ModalWrapper, open, close, isOpen];
};

export default useModal;
