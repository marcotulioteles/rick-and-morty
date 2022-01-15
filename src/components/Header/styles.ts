import styled from 'styled-components';

interface NavListProps {
  showMobile: boolean;
}

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

  @media(max-width: 1200px) {
    position: relative;
    width: 90%;
  }
`;

export const NavList = styled.ul<NavListProps>`
  display: flex;
  list-style: none;
  transition: display 0.5s ease-in-out;

  @media(max-width: 650px) {
    position: absolute;
    left: 2.25rem;
    top: 2rem;
    height: 360px;
    width: 240px;
    padding: 0.5rem 1rem;
    text-align: center;
    display: ${({ showMobile }) => showMobile ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 10;
  }
`;

export const NavListItem = styled.li`
  margin-right: 80px;

  @media(max-width: 650px) {
    margin-right: 0;
  }
`;

export const MenuMobile = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 2rem; 

  @media(max-width: 650px) {
    display: flex;
    align-items: center;
  }
`