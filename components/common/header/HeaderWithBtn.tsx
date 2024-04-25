import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface HeaderWithBtnProps {
  /* 우물 생성 단계인지에 대한 여부 */
  isNew: boolean;
}

function HeaderWithBtn({ isNew }: HeaderWithBtnProps) {
  return (
    <HeaderContainer>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <Logo>Frolog</Logo>
      </Link>
      <DoneBtn href={isNew ? '/well' : '/well/1'}>완료</DoneBtn>
    </HeaderContainer>
  );
}

export default HeaderWithBtn;

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color};
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const DoneBtn = styled(Link)`
  background: none;
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  cursor: pointer;
  font-weight: 500;
`;
