'use client';

import React from 'react';
import styled from 'styled-components';

import { usePathname } from 'next/navigation';
import { getLabelByRoute } from '@data/navData';
import BackButton from '../button/BackButton';

function TitleHeader() {
  const pathname = usePathname();
  return (
    <Header>
      <BackButton />
      <h1>{getLabelByRoute(pathname)}</h1>
    </Header>
  );
}

export default TitleHeader;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 14px 0;
  position: relative;
  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color};
  height: 80px;

  & h1 {
    width: 100%;
    color: ${({ theme }) => theme.colors.text_black};
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    letter-spacing: -0.07px;
    text-align: center;
  }
`;
