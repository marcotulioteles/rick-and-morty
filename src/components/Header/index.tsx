import React from 'react';
import { MenuNavItem } from '../MenuNavItem';
import { FiHome, FiFilm, FiStar } from 'react-icons/fi'

import {
  Container,
  NavList,
  NavListItem,
  Navigation
} from './styles'

export function Header() {
  return (
    <Container>
      <Navigation>
        <NavList>
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