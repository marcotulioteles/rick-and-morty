import styled from "styled-components";

interface ModalContainerProps {
  showModal: boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(13, 22, 41, 0.75);
  display: ${({ showModal }) => showModal ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 95%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  position: absolute;
  top: -1.25rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.highlight};
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.75;
  }
`;