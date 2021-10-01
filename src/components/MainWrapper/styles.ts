import styled from 'styled-components';

export const ContainerStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentWrapper = styled.div`
  height: 80%;
  width: 1200px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;