import React, { useState } from 'react';
import { MenuNavItem } from '../MenuNavItem';
import { FiHome, FiFilm, FiStar, FiMenu, FiX } from 'react-icons/fi'

import {
  Container,
  NavList,
  NavListItem,
  Navigation,
  MenuMobile
} from './styles'

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
      </Navigation>
    </Container>
  );
}