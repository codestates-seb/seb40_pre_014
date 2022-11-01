import React, { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalStates } from '../../states/modal';
import { ModalContainer } from './Modal.style';

const Modal = ({ children }) => {
  const setModal = useSetRecoilState(modalStates);
  const backgroundRef = useRef(null);
  const handleModals = () => {
    setModal({
      search: false,
    });
  };
  const onClickBackground = ({ target }) => {
    target === backgroundRef.current && handleModals();
  };
  return (
    <ModalContainer ref={backgroundRef} onClick={onClickBackground}>
      {children}
    </ModalContainer>
  );
};

export default Modal;
