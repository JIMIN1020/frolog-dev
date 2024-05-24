'use client';

import Image from 'next/image';
import React from 'react';
import useStore from 'store/store';
import styled from 'styled-components';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  iconUrl: string;
  size: number;
  label?: string;
}

function NavItem({ href, iconUrl, size, label }: NavItemProps) {
  const { user, setIsOpenLoginPopUp } = useStore();

  const handleClick = (e: React.MouseEvent) => {
    if (!user && href !== '/search' && href !== '/') {
      e.preventDefault();
      setIsOpenLoginPopUp(true);
    }
  };

  return (
    <Wrapper onClick={handleClick}>
      {!(!user && href !== '/search' && href !== '/') ? (
        <Nav href={href} passHref>
          <Icon src={iconUrl} alt={href} width={size} height={size} />
          {label && <Label>{label}</Label>}
        </Nav>
      ) : (
        <>
          <Icon src={iconUrl} alt={href} width={size} height={size} />
          {label && <Label>{label}</Label>}
        </>
      )}
    </Wrapper>
  );
}

export default NavItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const Icon = styled(Image)`
  flex-shrink: 0;
`;

const Label = styled.span`
  display: flex;
  width: 26px;
  height: 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04px;
  margin-top: 5px;
`;
