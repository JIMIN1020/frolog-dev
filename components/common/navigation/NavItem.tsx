'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import useStore from 'store/store';
import styled from 'styled-components';

interface NavItemProps {
  href: string;
  iconUrl: string;
  size: number;
  label?: string;
}

function NavItem({ href, iconUrl, size, label }: NavItemProps) {
  const router = useRouter();
  const { user, setIsOpenLoginPopUp } = useStore();

  const handleClick = () => {
    if (user || href === '/search' || href === '/') {
      router.push(href);
    } else {
      setIsOpenLoginPopUp(true);
    }
  };

  return (
    <Nav onClick={handleClick}>
      <Icon src={iconUrl} alt={href} width={size} height={size} />
      {label && <Label>{label}</Label>}
    </Nav>
  );
}

export default NavItem;

const Nav = styled.button`
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
