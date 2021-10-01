import styled from 'styled-components';

export const Label = styled.label`
  width: 640px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.title};
  border-radius: 24px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  height: 100%;
  border: none;
  outline: none;
  flex: 1;
  background: none;
  padding: 0 4px;
  margin-left: -40px;
  font-family: 'Exo 2', 'Arial', sans-serif;
  font-size: 1.5rem;
  text-align: center;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.background};
`;
