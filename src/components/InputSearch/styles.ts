import styled from 'styled-components';

export const Label = styled.label`
  width: 640px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 24px;
  display: flex;
  align-items: center;

  @media(max-width: 870px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  height: 100%;
  border: none;
  outline: none;
  flex: 1;
  background: none;
  padding: 0 4px;
  margin-left: -1rem;
  font-family: 'Exo 2', 'Arial', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.background};

  @media(max-width: 480px) {
    margin-left: -1rem;
    padding: 0 2px;
    flex: none;
    width: 90%;
    font-size: 1.2rem;
  }
`;
