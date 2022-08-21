import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, Box, ButtonClose } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  });

  const onBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdrop}>
      <Box>
        <div>{children}</div>
        <ButtonClose type="button" onClick={onClose}>
          Close
        </ButtonClose>
      </Box>
    </Overlay>,
    modalRoot
  );
};
export default Modal;
