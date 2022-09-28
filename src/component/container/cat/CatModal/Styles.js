import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalWindow = styled.div`
  width: 90%;
  max-width: 450px;
  margin: 0 auto;
  height: 25em;
  background-color: #fff;
  z-index: 99;
  border-radius: 0.3rem;
  animation: modal-show 0.3s;
  overflow: hidden;
  position: relative;
`;

export const ModalClose = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 999;
