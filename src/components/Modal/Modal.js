import { createPortal } from 'react-dom';
import { Overlay, Box, ButtonClose } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  return createPortal(
    <Overlay onClick={onBackdrop}>
      <Box>
        <div>{children}</div>
        <ButtonClose type="button" onClick={onClose}>
          Cancel
        </ButtonClose>
      </Box>
    </Overlay>,
    modalRoot
  );
};
export default Modal;
