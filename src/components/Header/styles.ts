import styled from 'styled-components';

interface NavListProps {
  showMobile: boolean;
}

interface ImageWrapperProps {
  urlImage: string;
}

interface LanguageListProps {
  showList: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;

  @media(max-height: 420px) {
    height: 2rem;
    margin-top: 1.5rem;
  }
`;

export const Navigation = styled.nav`
  width: 1030px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  @media(max-width: 1200px) {
    position: relative;
    width: 90%;
  }

  @media(max-height: 420px) {
    padding-bottom: 1rem;
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
  
  @media(max-height: 420px) {
    position: absolute;
    left: 2.25rem;
    top: 2rem;
    height: 120px;
    width: 460px;
    padding: 0.5rem 1rem;
    text-align: center;
    display: ${({ showMobile }) => showMobile ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 10;
  }
`;

export const NavListItem = styled.li`
  margin-right: 80px;
  text-align: center;

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
  
  @media(max-height: 420px) {
    display: flex;
    align-items: center;
  }
`;

export const LanguageSwitcherContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4rem;
`;

export const LanguageSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.5rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.highlight};
  border: none;
  border-radius: 50%;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.75;
  }
`;

export const LanguageSwitcherList = styled.ul<LanguageListProps>`
  display: ${({ showList }) => showList ? 'block' : 'none'};
  left: -300%;
  top: 80%;
  position: absolute;
  list-style: none;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.title};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.5rem;
  z-index: 20;
`;

export const LanguageSwitcherLink = styled.a`
  display: flex;
  width: 8rem;
  color: inherit;
  text-decoration: none;
`;

export const LanguageSwitcherItem = styled.li`
  display: flex;
  width: fit-content;
  padding: 0.5rem 0.5rem;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
  cursor: pointer;

  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0; 
  }
  
  &:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FlagImage = styled.div<ImageWrapperProps>`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.625rem;
  background-image: ${({ urlImage }) => `url(${urlImage})`};
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 0.5rem; 
`;