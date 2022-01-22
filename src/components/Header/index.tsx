import React, { useState } from 'react';
import Image from 'next/image';
import { MenuNavItem } from '../MenuNavItem';
import { FiHome, FiFilm, FiStar, FiMenu, FiX } from 'react-icons/fi';
import { IoLanguageOutline } from 'react-icons/io5';

import {
  Container,
  NavList,
  NavListItem,
  Navigation,
  MenuMobile,
  LanguageSwitcherContainer,
  LanguageSwitcherButton,
  LanguageSwitcherList,
  LanguageSwitcherItem,
  FlagWrapper
} from './styles'

const BrFlagUrl = '/images/br.svg';
const FrFlagUrl = '/images/fr.svg';
const UsFlagUrl = '/images/us.svg';

export function Header() {
  const [clicked, setClicked] = useState(true);
  const [showMobile, setShowMobile] = useState(false);

  return (
    <Container>
      <Navigation>
        <MenuMobile onClick={() => {
          setClicked(!clicked)
          setShowMobile(!showMobile)
        }}>
          {clicked ? <FiMenu /> : <FiX />}
        </MenuMobile>
        <NavList
          showMobile={showMobile}
        >
          <NavListItem>
            <MenuNavItem
              href="/"
              icon={FiHome}
              title="home"
            />
          </NavListItem>
          <NavListItem>
            <MenuNavItem
              href="/all-episodes"
              icon={FiFilm}
              title="all episodes"
            />
          </NavListItem>
          <NavListItem>
            <MenuNavItem
              href="/favorites"
              icon={FiStar}
              title="favorites"
            />
          </NavListItem>
        </NavList>

        <LanguageSwitcherContainer>
          <LanguageSwitcherButton>
            <IoLanguageOutline />
          </LanguageSwitcherButton>
          <LanguageSwitcherList>
            <LanguageSwitcherItem>
              <FlagWrapper urlImage={BrFlagUrl} />
              pt-br
            </LanguageSwitcherItem>

            <LanguageSwitcherItem>
              <FlagWrapper urlImage={UsFlagUrl} />
              en
            </LanguageSwitcherItem>

            <LanguageSwitcherItem>
              <FlagWrapper urlImage={FrFlagUrl} />
              fr
            </LanguageSwitcherItem>
          </LanguageSwitcherList>
        </LanguageSwitcherContainer>
      </Navigation>
    </Container>
  );
}