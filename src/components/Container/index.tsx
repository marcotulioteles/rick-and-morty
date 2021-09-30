import React, { ReactNode } from 'react';

import {
  ContainerStyled, 
} from './styles'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
}