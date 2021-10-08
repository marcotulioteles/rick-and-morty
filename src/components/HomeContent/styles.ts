import styled from 'styled-components';

export const Container = styled.div`
  width: 1030px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleContent = styled.div`
  margin-top: 32px;
  max-width: 640px;
  display: flex;
`;

export const TitleAndSubtitle = styled.div`
`;

export const Subtitle = styled.h2`
  text-align: left;
  text-transform: lowercase;
  font-family: 'Audiowide', 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.title};
  font-size: 3rem;
  font-weight: normal;
`;

export const Text = styled.p`
  max-width: 640px;
  margin-top: 56px;
  font-family: 'Exo 2', 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

export const Portal = styled.img`
  animation: spin 45s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const RickAndMorty = styled.img`
  position: absolute;
  right: -32px;
`;