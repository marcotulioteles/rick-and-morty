import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const InfoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const Title = styled.h1`
  max-width: 90%;
  font-family: 'Audiowide', 'Arial', sans-serif;
  font-size: 1.25rem;
  font-weight: normal;
  text-transform: lowercase;
  word-wrap: break-word;
`;

export const InfoDate = styled.span`
  font-family: 'Exo 2', 'Arial', sans-serif;
  font-size: 0.75rem;
  font-weight: normal;
  text-transform: lowercase;
`;

export const CharactersNumber = styled.strong`
  font-family: 'Exo 2', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  text-transform: lowercase;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`;

export const Button = styled.button`
  height: 24px;
  width: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.title};
  background: none;
  outline: none;
  color: ${({ theme }) => theme.colors.title};
  font-size: 0.65rem;
  font-family: 'Exo 2', 'Arial', sans-serif;
  padding: 0 6px;
  transition: color 0.2s ease-in, border 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
    border: 1px solid ${({ theme }) => theme.colors.highlight};
  }
`;
