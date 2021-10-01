import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { IconBaseProps } from 'react-icons'
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router'

import {
  Container,
  Title
} from './styles';

interface MenuNavItemProps {
  href: string;
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  active?: boolean
}

export function MenuNavItem({ href, icon: Icon, title, active }: MenuNavItemProps) {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    (pathname === href) ? setIsActive(true) : setIsActive(false)
  }, [pathname])

  return (
    <Link href={href} passHref>
      <Container active={isActive}>
        <Icon size={32} color={isActive ? theme.colors.primary : theme.colors.highlight}/>
        <Title>{title}</Title>
      </Container>
    </Link>
  )
}