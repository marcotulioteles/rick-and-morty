/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MenuNavItem } from '../MenuNavItem';
import { FiHome, FiFilm, FiStar, FiMenu, FiX } from 'react-icons/fi';
import { IoLanguageOutline } from 'react-icons/io5';
import { useTranslation } from 'next-i18next';

import {
  Container,
  NavList,
  NavListItem,
  Navigation,
  MenuMobile,
  LanguageSwitcherContainer,
  LanguageSwitcherButton,
  LanguageSwitcherList,
  LanguageSwitcherLink,
  FlagImage,
  LanguageSwitcherItem
} from './styles'

const languageInfo = [
  {
    tag: 'português',
    flagPath: '/images/br.svg',
    locale: 'pt-BR'
  },
  {
    tag: 'english',
    flagPath: '/images/us.svg',
    locale: 'en-US'
  },
  {
    tag: 'français',
    flagPath: '/images/fr.svg',
    locale: 'fr'
  }
]

export function Header() {
  const [clicked, setClicked] = useState(true);
  const [showMobile, setShowMobile] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const router = useRouter();

  const { t } = useTranslation('header');

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
              title={t('home')}
            />
          </NavListItem>
          <NavListItem>
            <MenuNavItem
              href="/all-episodes"
              icon={FiFilm}
              title={t('all_episodes')}
            />
          </NavListItem>
          <NavListItem>
            <MenuNavItem
              href="/favorites"
              icon={FiStar}
              title={t('favorites')}
            />
          </NavListItem>
        </NavList>

        <LanguageSwitcherContainer>

          <LanguageSwitcherButton onClick={() => setShowLanguages(!showLanguages)}>
            <IoLanguageOutline />
          </LanguageSwitcherButton>

          <LanguageSwitcherList showList={showLanguages}>
            {languageInfo.map((item, index) =>
              <LanguageSwitcherItem key={`list-item${index}`}>
                <Link href={router.asPath} locale={item.locale}>
                  <LanguageSwitcherLink>
                    <FlagImage urlImage={item.flagPath} />
                    {item.tag}
                  </LanguageSwitcherLink>
                </Link>
              </LanguageSwitcherItem>
            )}
          </LanguageSwitcherList>

        </LanguageSwitcherContainer>
      </Navigation>
    </Container>
  );
}