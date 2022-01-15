import styled from 'styled-components';

interface ButtonProps {
  active?: boolean;
}

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
  justify-content: space-around;
  align-items: center;
  margin: 12px 0;
`;

export const ButtonWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button<ButtonProps>`
  height: 36px;
  width: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  border: none;
  background: ${({ theme, active }) => active ? theme.colors.highlight : theme.colors.secondary};
  outline: none;
  color: ${({ theme, active }) => active ? theme.colors.background : theme.colors.title};
  font-size: 1.2rem;
  font-family: 'Exo 2', 'Arial', sans-serif;
  padding: 0 6px;
  cursor: pointer;
  transition: color 0.2s ease-in, border 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.highlight};
  }
`;

export const MessageOver = styled.div`
  position: absolute;
  padding: 0.2rem 0.35rem;
  background-color: rgba(111, 190, 108, 0.5);
  border-radius: 0.15rem;
  top: 40px;
  left: -50%;
  font-size: 0.75rem
`;
