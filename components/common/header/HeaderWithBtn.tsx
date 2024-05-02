import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function HeaderWithBtn() {
  return (
    <HeaderContainer>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <Logo>Frolog</Logo>
      </Link>
      <DoneBtn type='submit'>완료</DoneBtn>
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

const DoneBtn = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text_lightgray};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  cursor: pointer;
  font-weight: 500;
`;
