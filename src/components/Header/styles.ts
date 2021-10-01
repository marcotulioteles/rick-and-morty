import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`;

export const Navigation = styled.nav`
  width: 1030px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavListItem = styled.li`
  margin-right: 80px;
`;