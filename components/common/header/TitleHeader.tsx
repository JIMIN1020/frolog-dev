'use client';

import React from 'react';
import styled from 'styled-components';
import { usePathname, useRouter } from 'next/navigation';
import { getLabelByRoute } from '@data/navData';
import BackButton from '../button/BackButton';

interface TitleHeaderProps {
  button?: boolean;
}

function TitleHeader({ button = false }: TitleHeaderProps) {
  const pathname = usePathname();
  const route = pathname
    .split('/')
    .slice(0, pathname.split('/').length - 1)
    .join('/');
  const router = useRouter();
  return (
    <Wrapper>
      <Header>
        <BackButton />
        <h1>{getLabelByRoute(route)}</h1>
        {button && (
          <DoneBtn onClick={() => router.push(`/profile/test-user`)}>
            완료
          </DoneBtn>
        )}
      </Header>
    </Wrapper>
  );
}

export default TitleHeader;

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  z-index: 900;
  background-color: ${({ theme }) => theme.colors.bg_white};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 14px 0;
  position: relative;
  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color};
  height: 70px;

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

const DoneBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  width: fit-content;
  background: none;
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.key_color};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  cursor: pointer;
  font-weight: 500;
`;
