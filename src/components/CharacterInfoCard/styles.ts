import styled from 'styled-components';

export const Container = styled.div`
  height: 140px;
  width: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharacterImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const CharacterName = styled.h1`
  text-align: center;
  font-size: 1rem;
  font-family: 'Audiowide', 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.title};
  margin: 4px 0;
`;

export const CharacterInfoContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const CharacterInfoLabel = styled.span`
  font-size: 0.65rem;
  font-family: 'Exo 2', 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.highlight};
`;

export const CharacterInfoData = styled.p`
  font-size: 0.65rem;
  font-family: 'Exo 2', 'Arial', sans-serif;
  color: ${({ theme }) => theme.colors.title};
`;