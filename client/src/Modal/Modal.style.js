import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  cursor: auto;

  @keyframes modalAnimation {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

export const ModalStyle = styled.section`
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  border-radius: 0.3rem;
  background-color: #fff;
  animation: modalAnimation 0.3s;
  overflow: hidden;
`;
