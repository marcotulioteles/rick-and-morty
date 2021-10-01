import React, { ReactNode } from 'react';
import { Header } from '../Header';

import {
  ContainerStyled,
  ContentWrapper
} from './styles'

interface ContainerProps {
  children: ReactNode
}

export function MainWrapper({ children }: ContainerProps) {
  return (
    <ContainerStyled>
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
    </ContainerStyled>
  );
}