import React from "react";
import { FiX } from "react-icons/fi";
import { EpisodeInfoPage } from "../EpisodeInfoPage";

import {
  ModalContainer,
  Button,
  ModalWrapper
} from './styles';

interface ModalProps {
  showModal: boolean;
  handleModal: () => void;
}

export function Modal({ showModal, handleModal }: ModalProps) {
  return (
    <ModalContainer showModal={showModal}>
      <ModalWrapper>
        <EpisodeInfoPage />
        <Button onClick={handleModal}><FiX /></Button>
      </ModalWrapper>
    </ModalContainer>
  );
}